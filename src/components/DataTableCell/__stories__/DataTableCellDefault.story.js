import DataTableCell from '../index'

const Template = (args, { argTypes }) => ({
  components: { DataTableCell },
  props: Object.keys(argTypes),
  template: `<DataTableCell v-bind="$props" />`,
})

export default Template.bind({})
