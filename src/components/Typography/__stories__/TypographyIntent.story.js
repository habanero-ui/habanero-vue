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
    intents: ['none', 'subtle', 'error', 'info', 'success', 'warning'],
  }),
  template: `
    <div class="p-6">
      <Typography
        v-for="intent in intents"
        :intent="intent"
        :key="intent">
        {{ intent }}
      </Typography>
    </div>
  `,
})
