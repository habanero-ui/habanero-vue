import Logo from '../index'

export default ((args, { argTypes }) => ({
  components: { Logo },
  props: Object.keys(argTypes),
  template: `<Logo v-bind="$props" />`,
})).bind({})
