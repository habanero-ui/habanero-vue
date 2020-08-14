import Profile from '../index'

export default ((args, { argTypes }) => ({
  components: { Profile },
  props: Object.keys(argTypes),
  template: `<Profile v-bind="$props" />`,
})).bind({})
