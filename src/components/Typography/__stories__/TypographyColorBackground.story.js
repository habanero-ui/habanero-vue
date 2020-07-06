import colors from '../../../constants/colors'
import Box from '../../Box/index'
import Typography from '../index'

export default () => ({
  components: { Box, Typography },
  data: () => ({
    colors,
  }),
  template: `
    <div class="p-6">
      <Box v-for="color in colors" class="p-2 w-24" :backgroundColor="color" :key="color">
        <Typography
          :color="color"
          :colorIsBackground="true">
          {{ color }}
        </Typography>
      </Box>
      <div class="p-2 w-24" style="background-color: #0f9;">
        <Typography class="text-heavy-black">custom</Typography>
      </div>
    </div>
  `,
})
