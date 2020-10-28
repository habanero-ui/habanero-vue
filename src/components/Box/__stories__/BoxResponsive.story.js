import Box from '../index'

const Template = (args, { argTypes }) => ({
  components: { Box },
  props: Object.keys(argTypes),
  template: `<Box v-bind="$props" :padding="['xsmall', 'gutter', 'xlarge']">Content</Box>`,
})

const BoxResponsive = Template.bind({})

BoxResponsive.argTypes = {
  margin: { table: { disable: true } },
  marginBottom: { table: { disable: true } },
  marginLeft: { table: { disable: true } },
  marginRight: { table: { disable: true } },
  marginTop: { table: { disable: true } },
  marginX: { table: { disable: true } },
  marginY: { table: { disable: true } },
  padding: { table: { disable: true } },
  paddingBottom: { table: { disable: true } },
  paddingLeft: { table: { disable: true } },
  paddingRight: { table: { disable: true } },
  paddingTop: { table: { disable: true } },
  paddingX: { table: { disable: true } },
  paddingY: { table: { disable: true } },
}

export default BoxResponsive
