import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import Box from '../index'

export default () => ({
  components: { Box },
  props: {
    padding: {
      default: number('padding'),
    },
    paddingBottom: {
      default: number('paddingBottom'),
    },
    paddingLeft: {
      default: number('paddingLeft'),
    },
    paddingRight: {
      default: number('paddingRight'),
    },
    paddingTop: {
      default: number('paddingTop'),
    },
    paddingX: {
      default: number('paddingX'),
    },
    paddingY: {
      default: number('paddingY'),
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
