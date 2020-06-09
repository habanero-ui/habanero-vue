import { text } from '@storybook/addon-knobs'
import colors from '../../../constants/colors'
import Typography from '../index'

export default () => ({
  components: { Typography },
  props: {
    text: {
      default: text('Text', 'Some Text'),
    },
  },
  data: () => ({
    colors,
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
