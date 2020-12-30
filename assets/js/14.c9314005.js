(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{372:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("While components encapsulate functionality using life cycle events, it is up to the execution to invoke the components. The event paradigm of the components allows for the composition of arbitrary component execution schedules. To make this more concrete, consider the following simple example:")]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" machinable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Experiment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" execute\n\nexecute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Experiment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"optimization"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("repeat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("The execution definition can be read as "),a("em",[e._v("Import component 'optimization' and repeat its execution in three independent trials")]),e._v(". Note that the experiment object does not trigger the execution but merely describes the execution plan and is then triggered using the "),a("code",[e._v("execute")]),e._v(" method.")]),e._v(" "),a("p",[e._v("Crucially, machinable can take care of the intricacies of the execution based on this high-level description, i.e. import and construction of the components and trigger of its event life cycle. It can also keep track of the used configuration, generate seeds for controlled randomness and prepare a unique storage path to keep results. Since the execution details are abstracted away, it does not matter whether you run on a local computer or a distributed remote cluster.")]),e._v(" "),a("h2",{attrs:{id:"defining-executions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-executions"}},[e._v("#")]),e._v(" Defining executions")]),e._v(" "),a("p",[e._v("All aspect of the execution can be controlled as arguments of the "),a("RouterLink",{attrs:{to:"/reference/execution.html#execute"}},[e._v("execute()")]),e._v(" method.")],1),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" machinable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" execute\nexecute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    experiment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# which components with what configuration")]),e._v("\n    storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# where to store results etc.")]),e._v("\n    engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# execution target, e.g. remote execution, multiprocessing etc.")]),e._v("\n    index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# database that can be used to search for executions later")]),e._v("\n    project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# the machinable project to use")]),e._v("\n    seed         "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# random seed")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("For even finer grained control, you can instantiate the "),a("RouterLink",{attrs:{to:"/reference/execution.html#execution"}},[e._v("Execution")]),e._v(" object directly using the same arguments. Notably, "),a("code",[e._v("execute()")]),e._v(" is an alias for "),a("code",[e._v("Execution().summary().submit()")]),e._v(".")],1),e._v(" "),a("p",[e._v("For every execution, machinable will generate a unique 6-digit submission ID (e.g. "),a("code",[e._v("OY1p1o")]),e._v(") that will be printed at the beginning of the execution output. The ID encodes the global random seed and is used as a relative directory to write any data generated by the experiment.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You can specify a system-wide default for "),a("code",[e._v("storage")]),e._v(", "),a("code",[e._v("engine")]),e._v(" and "),a("code",[e._v("index")]),e._v(". "),a("RouterLink",{attrs:{to:"/reference/settings.html"}},[e._v("Learn more")])],1)]),e._v(" "),a("h3",{attrs:{id:"experiment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experiment"}},[e._v("#")]),e._v(" Experiment")]),e._v(" "),a("p",[e._v("The experiment is the only required argument of the execution and specifies what components are executed. In the simplest case, it can be the name of a single component that will be executed using its default configuration. We will discuss the experiment specification in detail in the "),a("RouterLink",{attrs:{to:"/guide/experiments.html"}},[e._v("following section")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),a("p",[e._v("By default, the storage is the non-permanent system memory which is useful during development. To keep your results, make sure to pass in a "),a("a",{attrs:{href:"https://docs.pyfilesystem.org/en/latest/openers.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("filesystem url"),a("OutboundLink")],1),e._v(" to the "),a("code",[e._v("storage")]),e._v(" parameter.")]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[e._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" storage"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'~/results'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# local file system")]),e._v("\nexecute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" storage"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s3://bucket'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# s3 store")]),e._v("\n")])])]),a("h3",{attrs:{id:"engines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#engines"}},[e._v("#")]),e._v(" Engines")]),e._v(" "),a("p",[e._v("While experiments are executed locally and sequential by default, machinable provides different "),a("RouterLink",{attrs:{to:"/guide/engines.html"}},[e._v("Engines")]),e._v(" for parallel and remote execution. For example, to execute components in parallel processes you may specify the number of processes:")],1),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[e._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'native:5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("To learn more about available engines and their options, refer to the "),a("RouterLink",{attrs:{to:"/guide/engines.html"}},[e._v("Engine")]),e._v(" section.")],1),e._v(" "),a("h3",{attrs:{id:"seeding-and-reproducibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seeding-and-reproducibility"}},[e._v("#")]),e._v(" Seeding and reproducibility")]),e._v(" "),a("p",[e._v("machinable chooses and sets a global random seed automatically at execution time. You can also determine the seed with the "),a("code",[e._v("seed")]),e._v(" parameter by passing in a number or an submission ID:")]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[e._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Experiment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'controlled_randomness'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" seed"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("To re-use the seed of a given experiment and reproduce the execution results, you can pass the submission ID as the seed:")]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[e._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Experiment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'controlled_randomness'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" seed"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'OY1p1o'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("If you need more control over randomness and how packages are being seeded, you can overwrite the "),a("code",[e._v("on_seeding")]),e._v(" event in your component class.")]),e._v(" "),a("h2",{attrs:{id:"code-backups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-backups"}},[e._v("#")]),e._v(" Code backups")]),e._v(" "),a("p",[e._v("machinable automatically backs up the code base at execution time in a zip file that can be used to reproduce the results. Note that the project directory needs to be under Git-version control to determine which files are included and ignored during the backup ("),a("code",[e._v(".gitignore")]),e._v(" file).")]),e._v(" "),a("h2",{attrs:{id:"import-arguments-and-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-arguments-and-cli"}},[e._v("#")]),e._v(" Import arguments and CLI")]),e._v(" "),a("p",[e._v("It is often helpful to move frequently used execution arguments into modules, for example:")]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ./experiments/baseline.py")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" machinable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Experiment\nbaseline_experiment "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Experiment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ./engines/remote.py")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" machinable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("engine "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Remote\nmy_remote_execution_engine "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ssh://remote"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"~/project"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ./main.py")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" machinable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" execute\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" experiments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("baseline "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" baseline_experiment\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" engines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("remote "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" my_remote_execution_engine\nexecute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("baseline_experiment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("my_remote_execution_engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("You can simplify such imports by passing the module path prefixed with "),a("code",[e._v("@/")]),e._v(" as an execution argument, for instance:")]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" machinable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" execute\nexecute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@/experiments/baseline"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@/engines/remote"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("Note that you do not need to specify the actual variable name (e.g. "),a("code",[e._v("baseline_experiment")]),e._v(") since machinable will search the module for instances automatically.")]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ./experiments/baseline.py")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" machinable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Experiment\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# no need to assign the experiment to a variable")]),e._v("\nExperiment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'example'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("If the module contains more than one instance, only the last one will be returned.")]),e._v(" "),a("p",[e._v("As a further simplification, using a simple "),a("code",[e._v("@")]),e._v(" will instruct machinable to search in the following default modules.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Argument")]),e._v(" "),a("th",[e._v("Module")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("experiment")]),e._v(" "),a("td",[e._v("_machinable/experiments")])]),e._v(" "),a("tr",[a("td",[e._v("storage")]),e._v(" "),a("td",[e._v("_machinable/storages")])]),e._v(" "),a("tr",[a("td",[e._v("engine")]),e._v(" "),a("td",[e._v("_machinable/engines")])]),e._v(" "),a("tr",[a("td",[e._v("index")]),e._v(" "),a("td",[e._v("_machinable/indexes")])])])]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" machinable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" execute\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @baseline -> @/_machinable/experiments/baseline")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @remote -> @/_machinable/engines/remote")]),e._v("\nexecute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@baseline"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@remote"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("The "),a("code",[e._v("@")]),e._v("-notation is particularly useful when used in combination with the command line interface, as it allows you to specify complex arguments in a concise way.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ machinable execute @baseline --engine @remote\n")])])]),a("p",[e._v("With the basic execution concepts out of the way, the following sections will focus on the fundamental "),a("code",[e._v("experiment")]),e._v(" and "),a("code",[e._v("engine")]),e._v(" arguments in more detail.")])])}),[],!1,null,null,null);t.default=n.exports}}]);