import colors from '../../../constants/colors'
import Stack from '../../Stack/index'
import Typography from '../index'

export default () => ({
  components: { Stack, Typography },
  data: () => ({
    colors,
  }),
  template: `
    <div class="p-6">
      <Stack>
        <Typography
          v-for="color in colors"
          :color="color"
          :key="color">
          {{ color }}
        </Typography>
        <Typography style="color: #0f9;">custom</Typography>
      </Stack>
    </div>
  `,
})
