import Toast from '../index'

export default ((args, { argTypes }) => ({
  components: { Toast },
  props: Object.keys(argTypes),
  template: `<Toast v-bind="$props" />`,
})).bind({})
