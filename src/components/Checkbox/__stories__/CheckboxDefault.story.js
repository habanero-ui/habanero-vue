import Checkbox from '../index'

export default ((args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  template: `<Checkbox v-bind="$props" />`,
})).bind({})
