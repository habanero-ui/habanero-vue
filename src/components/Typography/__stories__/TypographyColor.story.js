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
    colors: ['none', 'error', 'info', 'subtle', 'success', 'warning'],
  }),
  template: `
    <div class="p-6">
      <Typography
        v-for="color in colors"
        :color="color"
        :key="color">
        {{ color }}
      </Typography>
      <Typography class="text-purple">custom</Typography>
    </div>
  `,
})
