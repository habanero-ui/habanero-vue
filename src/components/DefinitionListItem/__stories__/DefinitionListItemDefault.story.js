import DefinitionListItem from '../index'

export default ((args, { argTypes }) => ({
  components: { DefinitionListItem },
  props: Object.keys(argTypes),
  template: `<DefinitionListItem v-bind="$props">Test</DefinitionListItem>`,
})).bind({})
