import Box from '../index'

const Template = (args, { argTypes }) => ({
  components: { Box },
  props: Object.keys(argTypes),
  template: `
    <div class="flex flex-start p-6"> 
      <Box v-bind="$props">
        Content
      </Box>
    </div>
  `,
})

const BoxDefault = Template.bind({})

BoxDefault.args = {
  backgroundColor: 'none',
  borderRadius: 'none',
}

export default BoxDefault
