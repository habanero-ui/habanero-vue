import MoneyInput from '../index'

export default ((args, { argTypes }) => ({
  components: { MoneyInput },
  props: Object.keys(argTypes),
  template: `<MoneyInput v-bind="$props" />`,
})).bind({})
