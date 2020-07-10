import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'

import borderRadii from '../../../constants/borderRadii'
import colors from '../../../constants/colors'
import Box from '../index'

export default () => ({
  components: { Box },
  props: {
    backgroundColor: {
      default: select('backgroundColor', colors, 'none'),
    },
    borderRadius: {
      default: select('borderRadius', borderRadii, 'none'),
    },
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
        :backgroundColor="backgroundColor"
        :borderRadius="borderRadius"
        :padding="padding"
        :paddingBottom="paddingBottom"
        :paddingLeft="paddingLeft"
        :paddingRight="paddingRight"
        :paddingTop="paddingTop"
        :paddingX="paddingX"
        :paddingY="paddingY">
        Content
      </Box>
    </div>
  `,
  methods: {
    onSelect: action('onSelect'),
  },
})
