import { action } from '@storybook/addon-actions'

import Box from '../../Box/index'
import Button from '../../Button/index'
import Stack from '../../Stack/index'
import Typography from '../../Typography/index'
import Tooltip from '../index'

export default () => ({
  components: { Box, Button, Stack, Tooltip, Typography },
  template: `
    <div class="absolute inset-0 flex items-center justify-center">
      <Tooltip isContentInteractive>
        <Typography>Hover Me!</Typography>
        <template slot="content">
          <Box padding="medium">
            <Stack align="center" space="small">
              <Typography variant="body-extra-small">
                This is a message
              </Typography>
              <div>
                <Button
                  color="info"
                  size="small"
                  text="Action"
                  textVariant="body-extra-small"
                  variant="text"
                  @click.native="onActionClick"
                />
              </div>
            </Stack>
          </Box>
        </template>
      </Tooltip>
    </div>
  `,
  methods: {
    onActionClick: action('onActionClick'),
  },
})
