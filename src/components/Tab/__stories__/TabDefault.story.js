import Tab from '../index'

export default ((args, { argTypes }) => ({
  components: { Tab },
  props: Object.keys(argTypes),
  template: `<Tab v-bind="$props" />`,
})).bind({})
