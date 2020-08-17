import Button from '../index'

export default ((args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `<Button v-bind="$props" />`,
})).bind({})
