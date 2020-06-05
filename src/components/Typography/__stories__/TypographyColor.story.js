import { text } from '@storybook/addon-knobs'
import Typography from '../index'

export default () => ({
  components: { Typography },
  props: {
    text: {
      default: text('Text', 'Some Text'),
    },
  },
  data: () => ({
    colors: ['none', 'subtle', 'error', 'info', 'success', 'warning'],
  }),
  template: `
    <div class="p-6">
      <Typography
        v-for="color in colors"
        :color="color"
        :key="color">
        {{ color }}
      </Typography>
    </div>
  `,
})
