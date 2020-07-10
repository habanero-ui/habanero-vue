import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import Box from '../../Box/index'
import Typography from '../../Typography/index'
import PageSection from '../index'

export default () => ({
  components: { Box, PageSection, Typography },
  props: {
    actionText: {
      default: text('actionText', 'Action'),
    },
    titleText: {
      default: text('titleText', 'Section Title'),
    },
  },
  template: `
    <Box class="flex flex-col" padding="gutter">
      <PageSection
        :actionText="actionText"
        :onActionClick="onActionClick"
        :titleText="titleText">
        <template slot="action">
          <Typography class="cursor-pointer" color="error" variant="button">Report</Typography>
        </template>
        <Box padding="gutter">Put some content here...</Box>
      </PageSection>
    </Box>
  `,
  methods: {
    onActionClick: action('onActionClick'),
  },
})
