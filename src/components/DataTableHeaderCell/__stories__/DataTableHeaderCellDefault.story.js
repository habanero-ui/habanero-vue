import DataTableHeaderCell from '../index'

const Template = (args, { argTypes }) => ({
  components: { DataTableHeaderCell },
  props: Object.keys(argTypes),
  template: `<DataTableHeaderCell v-bind="$props" />`,
})

export default Template.bind({})
