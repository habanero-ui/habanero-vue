import Column from '../index'

export default ((args, { argTypes }) => ({
  components: { Column },
  props: Object.keys(argTypes),
  template: `<Column v-bind="$props">Column Content</Column>`,
})).bind({})
