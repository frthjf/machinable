(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{397:function(e,t,o){"use strict";o.r(t);var r=o(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"registration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[e._v("#")]),e._v(" Registration")]),e._v(" "),o("h2",{attrs:{id:"registration-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#registration-2"}},[e._v("#")]),e._v(" Registration")]),e._v(" "),o("p",[o("code",[e._v("machinable.registration.Registration()")])]),e._v(" "),o("h3",{attrs:{id:"default-code-backup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#default-code-backup"}},[e._v("#")]),e._v(" default_code_backup")]),e._v(" "),o("p",[o("code",[e._v("default_code_backup(self, execution)")])]),e._v(" "),o("p",[e._v("Allows to specify global default code backup settings")]),e._v(" "),o("h3",{attrs:{id:"default-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#default-resources"}},[e._v("#")]),e._v(" default_resources")]),e._v(" "),o("p",[o("code",[e._v("default_resources(self, engine, component, components)")])]),e._v(" "),o("p",[e._v("Allows to specify global default resources")]),e._v(" "),o("h3",{attrs:{id:"host-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#host-information"}},[e._v("#")]),e._v(" host_information")]),e._v(" "),o("p",[o("code",[e._v("host_information(self) -> dict")])]),e._v(" "),o("p",[e._v("Returned dictionary will be recorded as host information")]),e._v(" "),o("p",[e._v("Note that explicitly registered host methods take precedence over returned data")]),e._v(" "),o("h3",{attrs:{id:"on-before-component-construction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-before-component-construction"}},[e._v("#")]),e._v(" on_before_component_construction")]),e._v(" "),o("p",[o("code",[e._v("on_before_component_construction(self)")])]),e._v(" "),o("p",[e._v("Event triggered before the component is constructed.")]),e._v(" "),o("p",[e._v("For example, if the component module requires environment variables etc. before initial construction,\nthis event can be used to set them.")]),e._v(" "),o("h4",{attrs:{id:"arguments"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),o("h3",{attrs:{id:"on-before-component-import"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-before-component-import"}},[e._v("#")]),e._v(" on_before_component_import")]),e._v(" "),o("p",[o("code",[e._v("on_before_component_import(self, module, baseclass, default)")])]),e._v(" "),o("p",[e._v("Event triggered before a component is imported from a module")]),e._v(" "),o("p",[e._v("You can prevent the import and return a component or an alternative module import path\nfrom this method to be used instead.")]),e._v(" "),o("h4",{attrs:{id:"arguments-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("module")]),e._v(": "),o("code",[e._v("String")]),e._v(", the module path that is about to be imported")]),e._v(" "),o("li",[o("strong",[e._v("baseclass")]),e._v(": The component baseclass (either Component or Mixin)")]),e._v(" "),o("li",[o("strong",[e._v("default")]),e._v(": Optional default component that will be used if import fails")])]),e._v(" "),o("h3",{attrs:{id:"on-before-storage-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-before-storage-creation"}},[e._v("#")]),e._v(" on_before_storage_creation")]),e._v(" "),o("p",[o("code",[e._v("on_before_storage_creation(self, execution)")])]),e._v(" "),o("p",[e._v("Event triggered right before the storage is created")]),e._v(" "),o("h4",{attrs:{id:"arguments-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("execution")]),e._v(": machinable.Execution object")])]),e._v(" "),o("h3",{attrs:{id:"on-before-submit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-before-submit"}},[e._v("#")]),e._v(" on_before_submit")]),e._v(" "),o("p",[o("code",[e._v("on_before_submit(self, execution)")])]),e._v(" "),o("p",[e._v("Event triggered before submission of an execution")]),e._v(" "),o("p",[e._v("Return False to prevent the execution")]),e._v(" "),o("h4",{attrs:{id:"arguments-4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("execution")]),e._v(": machinable.Execution object")])]),e._v(" "),o("h3",{attrs:{id:"on-component-import"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-component-import"}},[e._v("#")]),e._v(" on_component_import")]),e._v(" "),o("p",[o("code",[e._v("on_component_import(self, component_candidate, module, baseclass, default)")])]),e._v(" "),o("p",[e._v("Event triggered during component import from a module")]),e._v(" "),o("p",[e._v("You can override the component candidate by returning a component from this method.")]),e._v(" "),o("h4",{attrs:{id:"arguments-5"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arguments-5"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("component_candidate")]),e._v(": Imported component candidate.\nCan also be instance of ImportError if the import failed or AttributeError if\nthe imported module did not contain a component which allows you to implement\na custom exception behaviour.")]),e._v(" "),o("li",[o("strong",[e._v("module")]),e._v(": "),o("code",[e._v("String")]),e._v(", the module path that is about to be imported")]),e._v(" "),o("li",[o("strong",[e._v("baseclass")]),e._v(": The component baseclass (either Component or Mixin)")]),e._v(" "),o("li",[o("strong",[e._v("default")]),e._v(": Optional default component that will be used if import fails")])]),e._v(" "),o("h3",{attrs:{id:"on-resolve-vendor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-resolve-vendor"}},[e._v("#")]),e._v(" on_resolve_vendor")]),e._v(" "),o("p",[o("code",[e._v("on_resolve_vendor(self, name, config, target)")])]),e._v(" "),o("p",[e._v("Event triggered when vendor is resolved")]),e._v(" "),o("p",[e._v("machinable attempts to fetch any vendor directories that\nare registered under the '+'-section in the machinable.yaml")]),e._v(" "),o("h4",{attrs:{id:"arguments-6"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arguments-6"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("name")]),e._v(": The name of the vendor")]),e._v(" "),o("li",[o("strong",[e._v("config")]),e._v(": The vendor configuration from the machinable.yaml")]),e._v(" "),o("li",[o("strong",[e._v("target")]),e._v(": The target directory (may or may not exists yet)")])]),e._v(" "),o("p",[e._v("Return False to prevent the default automatic resolution")]),e._v(" "),o("h3",{attrs:{id:"on-submit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-submit"}},[e._v("#")]),e._v(" on_submit")]),e._v(" "),o("p",[o("code",[e._v("on_submit(self, execution, is_resubmission)")])]),e._v(" "),o("p",[e._v("Event triggered during submission of an execution")]),e._v(" "),o("p",[e._v("Note that the execution has already been written and modifications\nhave no effect. Use on_before_submission instead.")]),e._v(" "),o("h4",{attrs:{id:"arguments-7"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arguments-7"}},[e._v("#")]),e._v(" Arguments")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("execution")]),e._v(": machinable.Execution object")]),e._v(" "),o("li",[o("strong",[e._v("is_resubmission")]),e._v(": "),o("code",[e._v("Boolean")]),e._v(" indicating whether execution is an existing resubmission")])])])}),[],!1,null,null,null);t.default=n.exports}}]);