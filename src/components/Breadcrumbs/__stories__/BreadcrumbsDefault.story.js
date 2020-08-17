import Button from '../../Button/index'
import Breadcrumbs from '../index'

export default ((args, { argTypes }) => ({
  components: { Breadcrumbs, Button },
  props: Object.keys(argTypes),
  template: `<Breadcrumbs v-bind="$props" />`,
})).bind({})
