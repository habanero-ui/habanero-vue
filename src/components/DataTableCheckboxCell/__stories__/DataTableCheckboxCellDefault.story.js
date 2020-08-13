import DataTableCheckboxCell from '../index'

const Template = (args, { argTypes }) => ({
  components: { DataTableCheckboxCell },
  props: Object.keys(argTypes),
  template: `
    <DataTableCheckboxCell v-bind="$props" />
  `,
})

export default Template.bind({})
