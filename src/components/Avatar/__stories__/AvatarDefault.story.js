import Avatar from '../index'

export default ((args, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: `<Avatar v-bind="$props" />`,
})).bind({})
