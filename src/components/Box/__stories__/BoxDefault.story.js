import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import Box from '../index'

export default () => ({
  components: { Box },
  props: {
    padding: {
      default: text('padding', ''),
    },
    paddingBottom: {
      default: text('paddingBottom', ''),
    },
    paddingLeft: {
      default: text('paddingLeft', ''),
    },
    paddingRight: {
      default: text('paddingRight', ''),
    },
    paddingTop: {
      default: text('paddingTop', ''),
    },
    paddingX: {
      default: text('paddingX', ''),
    },
    paddingY: {
      default: text('paddingY', ''),
    },
  },
  template: `
    <div class="flex flex-start p-6"> 
      <Box
        class="bg-green"
        :padding="padding"
        :paddingBottom="paddingBottom"
        :paddingLeft="paddingLeft"
        :paddingRight="paddingRight"
        :paddingTop="paddingTop"
        :paddingX="paddingX"
        :paddingY="paddingY">
        <div class="bg-error">Content</div>
      </Box>
    </div>
  `,
  methods: {
    onSelect: action('onSelect'),
  },
})
