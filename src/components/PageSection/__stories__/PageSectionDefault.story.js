import Box from '../../Box/index'
import PageSection from '../index'

export default ((args, { argTypes }) => ({
  components: { Box, PageSection },
  props: Object.keys(argTypes),
  template: `
    <Box class="w-screen max-w-lg" padding="gutter">
      <PageSection v-bind="$props">
        <Box padding="gutter">Put some content here...</Box>
      </PageSection>
    </Box>
  `,
})).bind({})
