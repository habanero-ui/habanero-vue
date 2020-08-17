import Box from '../index'

export default ((args, { argTypes }) => ({
  components: { Box },
  props: Object.keys(argTypes),
  template: `<Box v-bind="$props">Content</Box>`,
})).bind({})
