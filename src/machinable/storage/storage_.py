from typing import Optional, Union

import os

from machinable.filesystem import open_fs
from machinable.storage.log import Log
from machinable.storage.record import Record
from machinable.submission.submission import Submission
from machinable.utils.importing import resolve_instance
from machinable.utils.traits import Discoverable
from machinable.utils.utils import sentinel


class Storage(Discoverable):
    def __init__(self, url: Optional[str] = None):
        """
        Storage interface

        # Arguments
        url: String, optional storage URL, defaults to `mem://`
        directory: String, defines the relative path in the storage.
            May contain the following variables:
            - &EXPERIMENT will be replaced by the experiment name
            - &PROJECT will be replaced by project name
            - %x expressions will be replaced by strftime
            The variables are expanded following GNU bash's variable expansion rules, e.g.
            `&{EXPERIMENT:-default_value}` or `&{PROJECT:?}` can be used.
        submission: String, optional submission selection
        component: String, optional component selection
        """
        self.url = url
        self._record_writers = {}
        self._log = None

    @property
    def record(self) -> Record:
        """Record interface"""
        return self.get_records("default")

    @property
    def log(self) -> Log:
        """Log interface"""
        if self._log is None:
            self._log = Log(storage=self)

        return self._log

    def get_url(self, append="", create=False) -> str:
        """Returns the storage's url path

        # Arguments
        append: String, optional postfix that is appended to the URL
        create: Boolean, if True path is being created if not existing
        """
        return os.path.join(
            self.config["url"], self.get_path(append, create=create)
        )

    def get_path(self, append="", create=False) -> str:
        """Returns the storage's relative path

        # Arguments
        append: String, optional postfix that is appended to the path
        create: Boolean, if True path is being created if not existing
        """
        path = os.path.join(
            self.config["directory"] or "",
            self.config["submission"] or "",
            self.config["component"] or "",
            append,
        )

        if create:
            with open_fs(
                {"url": self.config["url"], "create": True}
            ) as filesystem:
                filesystem.makedirs(os.path.dirname(path), recreate=True)

        return path

    def get_submission(self, component=False, or_fail=False):
        """Returns the [Submission](#)

        # Arguments
        component: Component to be returned if the URL is a submission containing multiple components.
            For example, set to 0 or -1 to retrieve first or last in the collection respectively
        or_fail: Boolean, by default None is returned if the submission does not exist.
            If True, an Exception will be raised instead
        """
        return Submission.find(
            self.get_url(), component=component, or_fail=or_fail
        )

    def get_stream(self, path, mode="r", *args, **kwargs):
        """Returns a file stream on the storage

        # Arguments
        path: Relative file path
        mode: Python file mode
        *args, **kwargs: Optional arguments passed into stream open()
        """
        filesystem = open_fs({"url": self.config["url"], "create": True})
        # make sure directory exists
        filesystem.makedirs(os.path.dirname(path), recreate=True)
        return filesystem.open(path, mode, *args, **kwargs)

    def get_local_directory(self, append="", create=False):
        """Returns the local storage filesystem path, or False if non-local

        # Arguments
        create: Boolean, if True path is being created if not existing

        # Returns
        Local filesystem path, or False if non-local
        """
        if not self.config["url"].startswith("osfs://"):
            return False

        return self.get_url(append, create=create).split("osfs://")[-1]

    def file(self, filepath, default=sentinel):
        """Returns the content of a file in the storage

        # Arguments
        filepath: Relative filepath
        default: Optional default if file does not exist
        """
        try:
            with open_fs(self.get_url()) as filesystem:
                return filesystem.load_file(filepath, default=default)
        except FileNotFoundError:
            if default is not sentinel:
                return default
            raise

    def save_file(self, filepath, data, overwrite=True):
        """Writes data to file

        # Arguments
        filepath: String, filepath with extension.
            Supported formats are .json (JSON), .npy (numpy), .p (pickle), .txt (txt)
        data: The data object
        overwrite: Boolean, if False write will be appended instead of overwritten
        """
        with open_fs({"url": self.get_url(), "create": True}) as filesystem:
            return filesystem.save_file(filepath, data, overwrite=overwrite)

    def save_data(self, name, data, overwrite=True):
        """Stores a data object

        # Arguments
        name: String, name identifier. Supported formats are .json (JSON), .npy (numpy), .p (pickle), .txt (txt)
        data: The data object
        overwrite: Boolean, if False write will be appended to file if existing
        """
        return self.save_file(os.path.join("data", name), data, overwrite)

    def data(self, name=None, default=sentinel):
        """Retrieves a data object from the storage

        # Arguments
        name: Name of the data object. If None, a list of available objects is returned
        """
        if name is None:
            try:
                with open_fs(self.get_url()) as filesystem:
                    return filesystem.listdir("data")
            except FileNotFoundError:
                if default is not sentinel:
                    return default
                raise

        return self.file(os.path.join("data", name), default)

    def has_file(self, filepath) -> bool:
        """Checks if a file exists

        # Arguments
        filepath: String, file name
        """
        with open_fs({"url": self.get_url(), "create": True}) as filesystem:
            return filesystem.exists(filepath)

    def get_records(
        self, scope=None, events=None, created_at=None
    ) -> Union[dict, Record]:
        """Creates or returns an instance of a record writer

        # Arguments
        scope: Name of the record writer. If None, a dict of all registered writers will be returned
        events: Event callback
        """
        if scope is None:
            return self._record_writers

        if scope not in self._record_writers:
            self._record_writers[scope] = Record(
                storage=self, scope=scope, events=events, created_at=created_at
            )

        return self._record_writers[scope]

    def has_records(self, scope="default") -> bool:
        """Determines whether records have been written

        # Arguments
        scope: String, name of the record writer. Defaults to 'default'
        """
        return self.has_file(f"records/{scope}.jsonl")

    def has_log(self) -> bool:
        """Determines whether log has been written"""
        return self.has_file(f"log.txt")

    def __str__(self):
        return self.__repr__()

    def __repr__(self):
        return f"Storage <{self.get_url()}>"
