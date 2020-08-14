import TextArea from '../index'

export default ((args, { argTypes }) => ({
  components: { TextArea },
  props: Object.keys(argTypes),
  template: `<TextArea v-bind="$props" />`,
})).bind({})
