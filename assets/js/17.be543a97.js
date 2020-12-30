(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{375:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sharing-and-importing-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharing-and-importing-projects"}},[e._v("#")]),e._v(" Sharing and importing projects")]),e._v(" "),a("p",[e._v("One advantage of machinable's configuration structure is that it implicitly enforces modularity. When you build a machinable project, components will always be contained in a dedicated python module that is specified in the "),a("code",[e._v("machinable.yaml")]),e._v(". The corresponding configuration values will be modularized in a similar way in the components list. The structure not only helps to keep your code base organized, but also allows for easy sharing and re-use of machinable projects.")]),e._v(" "),a("h2",{attrs:{id:"sharing-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharing-a-project"}},[e._v("#")]),e._v(" Sharing a project")]),e._v(" "),a("p",[e._v("To share a machinable project, it's enough share the project's source code repository that contains the "),a("code",[e._v("machinable.yaml")]),e._v(". Other projects can import and use it without modification since all necessary configuration is described in the "),a("code",[e._v("machinable.yaml")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"importing-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-a-project"}},[e._v("#")]),e._v(" Importing a project")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Direct importing is one of the most powerful features of the machinable system. You can cherry-pick components of existing projects or start maintaining your own shared libraries. If you are familiar with package managers like "),a("code",[e._v("npm")]),e._v(" or "),a("code",[e._v("composer")]),e._v(", you can think of machinable projects as dependency packages that are ready for use without any special glue code.")])]),e._v(" "),a("p",[e._v("To import an existing machinable project, copy or clone it into the "),a("code",[e._v("vendor")]),e._v(" directory in your project:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("my-machinable-project\n├── vendor\n│   └── imported_project/\n│       ├── ...\n│       └── machinable.yaml\n└── machinable.yaml\n")])])]),a("p",[e._v("Then register its name in your "),a("code",[e._v("machinable.yaml")]),e._v(" under the "),a("code",[e._v("+")]),e._v(" key:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("imported_project")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("components")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n")])])]),a("p",[e._v("That's it. You can now use and extend the imported components as if they were part of your project:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("imported_project")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" git+https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//git.serv.er/baselines/resnet50.git\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("components:experiments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("experiments.benchmark")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" imagenet\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("components:models")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("+.imported_project.models.resnet=baseline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("models.improved_resnet^+.imported_project.models.resnet=improved")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("learning_rate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.01")]),e._v("\n")])])]),a("p",[e._v("In this example, the "),a("code",[e._v("+.")]),e._v(" syntax is being used to use a baseline model in the imported project. Generally, components of the imported projects can be accessed via "),a("code",[e._v("+.{project_name}")]),e._v(".")]),e._v(" "),a("p",[e._v("Naturally, you can also re-use the original code implementation via standard python inheritance, for instance:")]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" vendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("imported_project"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("resnet "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" ResnetModel\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyImprovedModel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("ResnetModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# overwrite and extend some functionality")]),e._v("\n")])])]),a("p",[e._v("Import dependencies can be used recursively, meaning the imported project may have dependecies of its own that will be resolved in turn.")]),e._v(" "),a("p",[e._v("Importing provides you with another level of modularity and makes it easy to maintain dependencies. It also provides an easy way of sharing baseline or benchmark models. To share logic like data pipelines etc., consider using "),a("RouterLink",{attrs:{to:"/guide/mixins.html"}},[e._v("mixins")]),e._v(" as well.")],1),e._v(" "),a("h3",{attrs:{id:"global-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-dependencies"}},[e._v("#")]),e._v(" Global dependencies")]),e._v(" "),a("p",[e._v("Rather than re-downloading dependencies manually for every project, you can overwrite how dependency should be resolved in the "),a("RouterLink",{attrs:{to:"/reference/settings.html"}},[a("code",[e._v("~/machinable/settings.yaml")])]),e._v(":")],1),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("imports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("imported_project")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /opt/imported_project\n")])])]),a("p",[e._v("machinable will automatically symlink "),a("code",[e._v("/opt/imported_project")]),e._v(" etc. into "),a("code",[e._v("vendor/")]),e._v(" whenever a project declares the dependency (e.g. "),a("code",[e._v("imported_project")]),e._v(").")])])}),[],!1,null,null,null);t.default=n.exports}}]);