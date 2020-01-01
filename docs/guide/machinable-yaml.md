---
annotations: {
    module_mapping: [
        {
          x: 53, 
          y: 42, 
          width: 130,
          height: 25, 
          value: "
          The keyname describes the Python module import path, i.e. path/to_module.py
          "
        },
        {
          x: 53, 
          y: 65, 
          width: 150,
          height: 67, 
          value: "
          The configuration that will become available to the component
          "
        },
        {
          x: 53, 
          y: 132, 
          width: 135,
          height: 25, 
          value: "
          If the target is a module directory, machinable will use path/directory/__init__.py instead
          "
        },
        {
          x: 53, 
          y: 175, 
          width: 135,
          height: 25, 
          value: "
          You can choose any name or directory structure as long as you specify the import path of the source code module, e.g. models/baseline.py
          "
        }
    ],
    module_groups: [
        {
          x: 20, 
          y: 43, 
          width: 200,
          height: 25, 
          value: "
          Write 'components:module' to group components in this section
          "
        },
        {
          x: 45, 
          y: 65, 
          width: 120,
          height: 25, 
          value: "
          Equivalent to 'experiments.optimization'. The corresponding component will be placed in experiments/optimization.py
          "
        }
    ],
    observations: [
        {
          x: 163, 
          y: 18, 
          width: 170,
          height: 25, 
          value: "
          Data storage is managed and abstracted, local or in the cloud
          "
        },
        {
          x: 345, 
          y: 18, 
          width: 285,
          height: 25, 
          value: "
          Run queries against the storage to find the observation data you need
          "
        },
        {
          x: 20, 
          y: 43, 
          width: 500,
          height: 50, 
          value: "
          Retrieve results using a high-level interface that works particularly well in interactive environments
          "
        }
    ]
}
---


# machinable.yaml

Let's take a closer look at the features of machinable's central configuration file `machinable.yaml` that lives at the project directory root:

    my-machinable-project
    ├── ...
    └── machinable.yaml

## Module mapping

The component section lists the project's components and their configuration using the following convention: The name determines the
python module that contains the component's code, for example:

<Annotated name="module_mapping" :debug="false">
<<< @/.vuepress/includes/machinable_yaml/machinable.yaml
</Annotated>

You can group components into modules by appending the directory name to the components key:

<Annotated name="module_groups" :debug="false">
<<< @/.vuepress/includes/getting_started/machinable.yaml
</Annotated>

The module mapping allows machinable to load and execute code automatically. 

## Config inheritance

The module-to-config mapping also enables configuration sharing through inheritance. Consider the following example:

<<< @/.vuepress/includes/machinable_yaml/machinable_inheritance.yaml

Here, the extended component 'inherits' the ``base_component``'s configuration using the `^` syntax. The resulting configuration that becomes available to the ``extended_component`` would have the following structure :

```yaml
config_value: 1             # inherited
nested:
   value: overwritten       # inherited but overwritten
new_value: 3                # new value
```

Config inheritance can be useful to prevent unnecessary configuration repetitions ('I copy my entire children to make a minor modification') and allows to match class inheritance structures in the component implementation.

## Aliases

In larger projects, module paths can become long or convoluted. To simplify the discription, you can define simpler aliases using the `=` syntax:

<<< @/.vuepress/includes/machinable_yaml/machinable_alias.yaml

## Config references

It is often the case that configuration values depend on other configuration. For example, a model hyperparameter may depend on the dataset that is being used. In these cases it may be useful to reference configuration values rather than duplicating them so they only have to be adjusted in one place. In the `machinable.yaml` such config references can be written using the `$` symbol. In particular, `$.{path}` refers to values from the config root while `$self.{path}`
refers to values of the local component. Consider the following example:

<<< @/.vuepress/includes/machinable_yaml/machinable_references.yaml

Effectively, the dataset name can be adjusted in one place but used elsewhere. Note that you can use the Python convention of an leading underscore (`_example`) as weak "internal use" indicator. machinable will hide configuration values that start with an underscore (`_`) in execution outputs.

## Versions

Components often induce a number of different versions. For example, a model might have a version with and a version without momentum. To manage the configuration different versions it can be impractical to create multiple components that inherit the configuration from some base component. Instead, we can define configuration patterns inline. To define a version, specify the configuration difference under a key that starts with `~`.

<<< @/.vuepress/includes/machinable_yaml/machinable_versions.yaml

You can choose which version is going to be used in the execution task. Learn more about how execute different versions in the [task section](./tasks.md).

## Using subfiles

As the machinable.yaml grows, it may be useful to split the file into smaller subfiles. It is possible to include YAML configuration files relative to the `machinable.yaml` using the `$/` syntax:

<<< @/.vuepress/includes/machinable_yaml/machinable_includes.yaml