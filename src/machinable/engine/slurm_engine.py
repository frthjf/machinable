import json
import os
import stat

import pendulum
import sh

from ..core.exceptions import ExecutionException
from ..filesystem import open_fs
from ..utils.formatting import exception_to_str
from .engine import Engine


class SlurmEngine(Engine):
    def __init__(self, commands=None, python="python", script="#!/usr/bin/env bash"):
        self.commands = self._parse_commands(commands)
        self.python = python
        self.script = script
        Engine.set_latest(self)

    def _parse_commands(self, commands):
        if isinstance(commands, (str, list, tuple)):
            commands = {"script": commands}
        elif commands is None:
            commands = {}

        if not isinstance(commands, dict):
            raise ValueError(f"Invalid command specification: {commands}")

        parsed = {}
        events = [
            "setup",
            "before_script",
            "after_script",
        ]
        for key, command in commands.items():
            if key not in events:
                raise ValueError(
                    f"Invalid command event: {key}. Available events: {events}"
                )

            if isinstance(command, (list, tuple)):
                command = ";\n".join(command)

            if command is None or command.strip() == "":
                continue

            if command.endswith(";"):
                command = command[:-1]

            parsed[key] = command

        return parsed

    def serialize(self):
        return {
            "type": "slurm",
            "commands": self.commands,
            "python": self.python,
            "script": self.script,
        }

    def _submit(self, execution):
        url = os.path.join(
            execution.storage.config["url"],
            execution.storage.config.get("directory", ""),
            execution.experiment_id,
        )

        # script path
        script_path = "_engine/slurm_" + pendulum.now().strftime("%d-%m-%Y_%H-%M-%S")
        with open_fs(url) as filesystem:
            filesystem.makedirs(script_path, recreate=True)
        script_url = os.path.join(url, script_path)

        # submission
        project = json.dumps(execution.project.options).replace('"', '\\"')
        code = f"""
        import machinable as ml
        e = ml.Execution.from_storage('{url}')
        e.set_engine('native')
        e.set_storage({execution.storage.config})
        e.set_project(ml.Project.from_json('{project}'))
        e.filter(lambda i, component, _: component == '$COMPONENT_ID')
        e.submit()
        """.replace(
            "\n        ", ";"
        )[
            1:-1
        ]
        submission = (
            f'cd {execution.project.directory_path};\n{self.python} -c "{code};"\n'
        )

        for (
            index,
            execution_type,
            component,
            components,
            storage,
            resources,
            args,
            kwargs,
        ) in execution.schedule.iterate(execution.storage.config):
            component_id = component["flags"]["COMPONENT_ID"]
            component_path = os.path.join(url.replace("osfs://", ""), component_id)
            os.makedirs(component_path, exist_ok=True)
            script = f"{self.script}\n"
            script += f'#SBATCH --job-name="{execution.experiment_id}:{component_id}"\n'
            script += f"#SBATCH -o {os.path.join(component_path,  'output.log')}\n"
            script += "#SBATCH --open-mode=append\n"
            script += f"export MACHINABLE_PROJECT={execution.project.directory_path}\n"
            try:
                script += self.commands["before_script"] + ";\n"
            except KeyError:
                pass

            script += submission.replace("$COMPONENT_ID", component_id)

            try:
                script += self.commands["after_script"] + ";\n"
            except KeyError:
                pass

            # write script to disk
            target = os.path.join(
                script_url.replace("osfs://", ""), f"{component_id}.sh"
            )

            if target.find("://") != -1:
                raise ValueError("Slurm engine only support local storages")

            with open(target, "w") as f:
                f.write(script)
            st = os.stat(target)
            os.chmod(target, st.st_mode | stat.S_IEXEC)

            # parse resource arguments
            if resources is None:
                resources = {}
            elif isinstance(resources, str):
                resources = {"args", [resources]}
            elif isinstance(resources, (tuple, list)):
                resources = {"args": list(resources)}

            arguments = resources.get("args", [])
            if isinstance(arguments, str):
                arguments = [arguments]

            command = []
            for a in arguments:
                if a.startswith("--"):
                    command.append(a)
                    continue
                if a.startswith("-"):
                    command.extend(a.split(" ", maxsplit=1))
            command.append(target)

            # submit to slurm
            try:
                p = sh.sbatch(*command)
                execution.set_result(p, echo=False)
            except Exception as ex:
                if isinstance(ex, sh.ErrorReturnCode):
                    message = ex.stderr.decode("utf-8")
                else:
                    message = exception_to_str(ex)
                execution.set_result(
                    ExecutionException(message, reason="engine_failure"), echo=True,
                )

        total = len(execution.schedule._result)
        success = len(execution.schedule._result) - execution.failures
        self.log(f"Submitted {success}/{total} jobs successfully")

        return execution

    def storage_middleware(self, storage):
        if storage.get("url", "mem://").startswith("mem://"):
            raise ValueError("Remote engine does not support temporary file systems")

        storage["allow_overwrites"] = True
        storage["output_redirection"] = "DISABLED"  # use slurm log instead

        return storage

    def __repr__(self):
        return f"Engine <slurm>"
