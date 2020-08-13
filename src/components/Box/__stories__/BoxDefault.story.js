import Box from '../index'

const Template = (args, { argTypes }) => ({
  components: { Box },
  props: Object.keys(argTypes),
  template: `
    <Box v-bind="$props">
      Content
    </Box>
  `,
})

const BoxDefault = Template.bind({})

BoxDefault.args = {
  backgroundColor: 'none',
  borderRadius: 'none',
}

export default BoxDefault
