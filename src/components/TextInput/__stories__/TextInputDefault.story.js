import TextInput from '../index'

export default ((args, { argTypes }) => ({
  components: { TextInput },
  props: Object.keys(argTypes),
  template: `<TextInput v-bind="$props" />`,
})).bind({})
