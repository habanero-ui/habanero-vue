import RadioButton from '../index'

export default (args, { argTypes }) => ({
  components: { RadioButton },
  props: Object.keys(argTypes),
  template: `<RadioButton v-bind="$props" />`,
})
