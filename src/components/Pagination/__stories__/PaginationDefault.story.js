import Pagination from '../index'

export default ((args, { argTypes }) => ({
  components: { Pagination },
  props: Object.keys(argTypes),
  template: `<Pagination v-bind="$props" />`,
})).bind({})
