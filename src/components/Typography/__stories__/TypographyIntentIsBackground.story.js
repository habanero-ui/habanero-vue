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
    <div class="items-start p-6">
      <div v-for="intent in intents" class="p-2 w-24" :class="getWrapperBGClass(intent)" :key="intent">
        <Typography
          :intent="intent"
          :intentIsBackground="true">
          {{ intent }}
        </Typography>
      </div>
    </div>
  `,
  methods: {
    getWrapperBGClass(intent) {
      if (intent === 'none') {
        return 'bg-black'
      }

      if (intent === 'subtle') {
        return 'bg-gray-500'
      }

      return `bg-${intent}`
    },
  },
})
