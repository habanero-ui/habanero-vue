import colors from '../../../constants/colors'
import Box from '../../Box/index'
import Spinner from '../index'

export default () => ({
  components: { Box, Spinner },
  data: () => ({
    colors,
  }),
  template: `
    <div class="flex flex-col items-start p-6">
      <Box v-for="color in colors" class="p-2" :backgroundColor="color" :key="color">
        <Spinner
          :color="color"
          :colorIsBackground="true"
        />
      </Box>
      <div class="p-2" style="background-color: #0f9;">
        <Spinner class="text-heavy-black" name="badge" />
      </div>
    </div>
  `,
})
