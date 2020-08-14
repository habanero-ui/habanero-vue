import Spinner from '../index'

export default ((args, { argTypes }) => ({
  components: { Spinner },
  props: Object.keys(argTypes),
  template: `<Spinner v-bind="$props" />`,
})).bind({})
