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
    <div class="items-start p-6">
      <div v-for="color in colors" class="p-2 w-24" :class="getWrapperBGClass(color)" :key="color">
        <Typography
          :color="color"
          :colorIsBackground="true">
          {{ color }}
        </Typography>
      </div>
    </div>
  `,
  methods: {
    getWrapperBGClass(color) {
      return color === 'none' ? 'bg-black' : `bg-${color}`
    },
  },
})
