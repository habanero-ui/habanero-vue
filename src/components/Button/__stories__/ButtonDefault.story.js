import Button from '../index'

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
    <div v-if="wrapWithDiv">
      <Button v-bind="$props" />
    </div>
    <Button v-else v-bind="$props" />
  `,
})

export default Template.bind({})
