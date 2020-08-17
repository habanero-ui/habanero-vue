import Tooltip from '../index'

export default ((args, { argTypes }) => ({
  components: { Tooltip },
  props: Object.keys(argTypes),
  template: `<Tooltip v-bind="$props">Hover Me!</Tooltip>`,
})).bind({})
