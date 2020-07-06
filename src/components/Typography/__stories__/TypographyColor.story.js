import colors from '../../../constants/colors'
import Typography from '../index'

export default () => ({
  components: { Typography },
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
      <Typography style="color: #0f9;">custom</Typography>
    </div>
  `,
})
