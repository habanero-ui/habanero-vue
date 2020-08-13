import Divider from '../index'

export default ((args, { argTypes }) => ({
  components: { Divider },
  props: Object.keys(argTypes),
  template: `<Divider v-bind="$props" />`,
})).bind({})
