import Column from '../index'

const Template = (args, { argTypes }) => ({
  components: { Column },
  props: Object.keys(argTypes),
  template: `
    <Column v-bind="$props">
      Column Content
    </Column>
  `,
})

export default Template.bind({})
