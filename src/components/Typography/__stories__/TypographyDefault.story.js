import { text } from '@storybook/addon-knobs'
import variants from '../../../constants/variants'
import Typography from '../index'

export default () => ({
  components: { Typography },
  props: {
    text: {
      default: text('Text', 'Some Text'),
    },
  },
  data: () => ({
    variants,
  }),
  template: `
    <div class="p-6">
      <div v-for="(variant, index) in variants" class="mb-4" :key="variant">
        <Typography :variant="variant">
          <span class="capitalize">{{ variant.replace('-', ' ') }}</span> / {{ text }}
        </Typography>
        <hr class="mt-1" />
      </div>
    </div>
  `,
})
