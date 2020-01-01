# Mixins

You will often find that different projects share the same methods despite containing quite different components. For instance, a generative model and an image classifier might load the same MNIST dataset pipeline. Components might share code that allows them to be executed in a distributed way. Ideally, we'd like to develop and maintain such common building blocks in a project overarching way - orthogonal to the details of the component that is using them. Mixins allow us to achieve exactly that.

## Mixin example: data pipeline

Suppose you've written an MNIST image classifier:

<<< @/.vuepress/includes/mixins/machinable_standalone.yaml

<<< @/.vuepress/includes/mixins/classifier_standalone.py

To make the data pipeline reusable, we can separate the `load_data` method into a mixin:

<<< @/.vuepress/includes/mixins/machinable_mixed.yaml

The mixin configuration is placed under the `mixins` section in the `machinable.yaml`. In this example, we register the mixin with the name `data` and move the configuration that belongs to the mixin out from the component. The component can use the mixin by registering its name under `_mixins_`.

Similiarly, the data loading method is moved from the component into the corresponding `data.py` via cut-and-paste:

<<< @/.vuepress/includes/mixins/data_mixin.py

The data loader is now completely disentangled from the component and can be maintained independently. In fact, mixins support config inheritance, aliasing and importing just like other components. In the component, we can access the mixins functionality via the `_<name>_` attribute, e.g. `_data_`:

<<< @/.vuepress/includes/mixins/classifier_mixed.py

Note that the mixin function acts on the object from which it is called. They are dynamically 'mixed-in' to the object as if they were
part of it. In the example, `load_data` assigns `self.data` to the component so`self.network.fit(self.data)` does not error. Conversely, `self` in a mixin method refers to the object that uses it and not to the mixin itself. If you want to access the mixin itself you can use `self.__mixin__`. However, when you call `self.__mixin__.method()` the `self` in method will - again - refer
to the object that binds it.

## Mix-in components

It is possible to use components directly as mixins:

<<< @/.vuepress/includes/mixins/machinable_mixed_controller.yaml

You can then cherry-pick the methods you need without inheriting the full functionality, for instance the components' training method
`self._classifier_.train()`.