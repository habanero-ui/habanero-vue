import Breadcrumbs from '../index'

export default ((args, { argTypes }) => ({
  components: { Breadcrumbs },
  props: Object.keys(argTypes),
  template: `<Breadcrumbs v-bind="$props" />`,
})).bind({})
