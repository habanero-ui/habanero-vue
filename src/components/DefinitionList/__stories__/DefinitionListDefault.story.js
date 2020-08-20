import DefinitionList from '../index'

export default ((args, { argTypes }) => ({
  components: { DefinitionList },
  props: Object.keys(argTypes),
  template: `<DefinitionList v-bind="$props" />`,
})).bind({})
