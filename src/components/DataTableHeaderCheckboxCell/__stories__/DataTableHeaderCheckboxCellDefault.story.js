import DataTableHeaderCheckboxCell from '../index'

const Template = (args, { argTypes }) => ({
  components: { DataTableHeaderCheckboxCell },
  props: Object.keys(argTypes),
  template: `
    <DataTableHeaderCheckboxCell v-bind="$props" />
  `,
})

export default Template.bind({})
