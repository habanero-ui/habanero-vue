import { action } from '@storybook/addon-actions'

import Box from '../../Box/index'
import Button from '../../Button/index'
import ListItem from '../../ListItem/index'
import Stack from '../../Stack/index'
import Dropdown from '../index'

export default () => ({
  components: { Box, Button, Dropdown, ListItem, Stack },
  data: () => ({
    items: ['Download CSV', 'Download XLS'],
  }),
  template: `
    <div class="absolute inset-0 flex items-center justify-center">
      <Dropdown :placement="placement">
        <Button iconName="chevron-down" text="Download" variant="secondary" />
        <template slot="content">
          <Box>
            <Stack :showDividers="true">
              <ListItem
                v-for="item in items"
                :key="item"
                :primaryText="item"
                @click.native="action"
              />
            </Stack>
          </Box>
        </template>
      </Dropdown>
    </div>
  `,
  methods: {
    action: action('click'),
  },
})
