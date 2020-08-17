import SearchInput from '../index'

export default ((args, { argTypes }) => ({
  components: { SearchInput },
  props: Object.keys(argTypes),
  template: `<SearchInput v-bind="$props" />`,
})).bind({})
