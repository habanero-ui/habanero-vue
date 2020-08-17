import Box from '../../Box/index'
import Button from '../../Button/index'
import PageSection from '../index'

const Template = (args, { argTypes }) => ({
  components: { Box, Button, PageSection },
  props: Object.keys(argTypes),
  template: `
    <Box class="w-screen max-w-lg" padding="gutter">
      <PageSection v-bind="$props">
        <template slot="action"> 
          <Button color="error" :text="actionText" variant="text" @click.native="onActionClick" />
        </template>
        <Box padding="gutter">Put some content here...</Box>
      </PageSection>
    </Box>
  `,
})

const PageSectionCustomAction = Template.bind({})

PageSectionCustomAction.args = {
  actionText: 'Report',
}

export default PageSectionCustomAction
