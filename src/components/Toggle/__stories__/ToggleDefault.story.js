import Toggle from '../index'

export default ((args, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  template: `<Toggle v-bind="$props" />`,
})).bind({})
