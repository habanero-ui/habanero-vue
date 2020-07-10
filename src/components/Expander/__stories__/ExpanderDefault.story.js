import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import Box from '../../Box/index'
import Expander from '../index'

export default () => ({
  components: { Box, Expander },
  props: {
    headerPaddingX: {
      default: text('headerPaddingX', 'gutter'),
    },
    isOpen: {
      default: boolean('isOpen', true),
    },
    text: {
      default: text('text', 'Some Text'),
    },
  },
  template: `
    <Box padding="gutter">
      <Box class="border-2 border-border">
        <Expander
          :headerPaddingX="headerPaddingX"
          :isOpen="isOpen"
          :onIsOpenChange="onIsOpenChange"
          :text="text">
          <Box backgroundColor="blue" padding="gutter">
            Some Content
          </Box>
        </Expander>
      </Box>
    </Box>
  `,
  methods: {
    onIsOpenChange: action('onIsOpenChange'),
  },
})
