import DataTableActionCell from '../index'

const Template = (args, { argTypes }) => ({
  components: { DataTableActionCell },
  props: Object.keys(argTypes),
  template: `
    <div class="w-40"> 
      <DataTableActionCell v-bind="$props" />
    </div>
  `,
})

export default Template.bind({})
