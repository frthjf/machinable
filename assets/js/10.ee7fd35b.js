(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{368:function(t,a,e){"use strict";e.r(a);var n=e(42),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("h2",{attrs:{id:"what-is-machinable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-machinable"}},[t._v("#")]),t._v(" What is machinable?")]),t._v(" "),e("p",[t._v("When you implement a machine learning model with a number of parameters, you inevitably end up engineering some "),e("em",[t._v("entry point")]),t._v(" that allows you to experiment with it in a more or less effective way. You may, for example, add a command line argument parser to run your model directly from a terminal. Or, you might use configuration files to manipulate configuration options more efficiently.")]),t._v(" "),e("p",[e("strong",[t._v("machinable")]),t._v(" provides a system to build such "),e("em",[t._v("entry points")]),t._v(" in an efficient, reliable and scalable way so you can dedicate more time to the development of your models.")]),t._v(" "),e("p",[t._v("machinable is designed to be incrementally adoptable. The core is focused on configuration, and is easy to pick up and integrate with existing projects. At the same time, machinable is perfectly capable to underpin the entire research life cycle. In particular, it allows you to easily share and extend what you have developed with confidence, so you can move faster from idea to result to publication.")]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),e("p",[t._v("The easiest way to try out machinable is using the "),e("a",{attrs:{href:"https://github.com/machinable-org/examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("example project"),e("OutboundLink")],1),t._v(" that you can run directly in your browser using Binder.")]),t._v(" "),e("p",[t._v("→ "),e("a",{attrs:{href:"https://mybinder.org/v2/gh/machinable-org/examples/master?urlpath=lab/tree/index.ipynb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Launch examples on Binder"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Feel free to follow along as the tutorial progresses. You can install the machinable locally using the Python package manager "),e("code",[t._v("pip install machinable")]),t._v(".")]),t._v(" "),e("p",[t._v("→ "),e("RouterLink",{attrs:{to:"/guide/installation.html"}},[t._v("Installation guide")])],1),t._v(" "),e("h2",{attrs:{id:"how-it-works"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),e("p",[t._v("At the core of machinable is a system that enables you to divide your project into configurable components. A component encapsulates a part of code that you would like to execute "),e("em",[t._v("and")]),t._v(" the configuration options that are associated with that code. Consider the following example script ("),e("code",[t._v("ridge_regression.py")]),t._v(").")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linear_model "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Ridge\n\nmodel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ridge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("intercept_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("To encapsulate this regression model as a component, you can copy the code into a "),e("code",[t._v("Component")]),t._v(" class.")]),t._v(" "),e("Annotated",{attrs:{name:"component",debug:!1}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" machinable "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Component\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linear_model "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Ridge\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RidgeRegression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("on_create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        model "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ridge"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alpha"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        model"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("info"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("intercept_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("p",[t._v("Note that the model has one parameter "),e("code",[t._v("alpha")]),t._v(" that has been replaced with "),e("code",[t._v("self.config.alpha")]),t._v(" to make it configurable. Moreover, the "),e("code",[t._v("print")]),t._v(" statement has been replaced to use the logging interface "),e("code",[t._v("self.log")]),t._v(".")]),t._v(" "),e("p",[t._v("The component can now be registered in the project-wide configuration file "),e("code",[t._v("machinable.yaml")]),t._v(" that specifies all default configuration values.")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("components")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ridge_regression")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("alpha")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v("\n")])])]),e("p",[t._v("After registration, the component is ready to be executed using the "),e("code",[t._v("execute")]),t._v(" method.")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" machinable "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" execute\nexecute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ridge_regression"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Or, using the command line:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ machinable execute ridge_regression\n")])])]),e("p",[t._v("While this seems not much different from running the script directly, the execution abstraction allows to easily and enhance your experimentation in without changing any of the component code. For example, machinable provides:")]),t._v(" "),e("ul",[e("li",[t._v("A way to efficiently modify hyperparameters, covering anything from minor changes to advanced hyperparameter tuning algorithms")]),t._v(" "),e("li",[t._v("Managed storage to capture any artifacts, logs, checkpoints, code backups etc.")]),t._v(" "),e("li",[t._v("Execution on arbitrary targets, e.g. remote execution via "),e("code",[t._v("Ray")]),t._v(", "),e("code",[t._v("Slurm")]),t._v(" or "),e("code",[t._v("SSH")]),t._v(" or custom implementation")]),t._v(" "),e("li",[t._v("Live-tracking and experiment databases")]),t._v(" "),e("li",[t._v("Managed randomness and reproducibility")])]),t._v(" "),e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),e("p",[t._v("We've briefly introduced the most basic features of machinable. Continue reading this guide that will cover them and more advanced features in more detail.")])],1)}),[],!1,null,null,null);a.default=s.exports}}]);