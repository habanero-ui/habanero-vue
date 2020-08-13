import { select, text } from '@storybook/addon-knobs'

import colors from '../../../constants/colors'
import variants from '../../../constants/typographyVariants'
import Typography from '../index'

export default () => ({
  components: { Typography },
  props: {
    color: {
      default: select('color', colors, 'black'),
    },
    text: {
      default: text('text', 'The quick brown fox jumps over the lazy dog'),
    },
    variant: {
      default: select('variant', variants, 'body-large'),
    },
  },
  data: () => ({
    variants,
  }),
  template: `
    <div class="p-6">
      <Typography :color="color" :variant="variant">{{ text }}</Typography>
    </div>
  `,
})
