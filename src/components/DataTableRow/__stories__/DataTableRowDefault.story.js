import DataTableRow from '../index'

export default ((args, { argTypes }) => ({
  components: { DataTableRow },
  props: Object.keys(argTypes),
  template: '<DataTableRow v-bind="$props" />',
})).bind({})
