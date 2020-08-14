import Typography from '../index'

export default ((args, { argTypes }) => ({
  components: { Typography },
  props: Object.keys(argTypes),
  template: `<Typography v-bind="$props">{{ text }}</Typography>`,
})).bind({})
