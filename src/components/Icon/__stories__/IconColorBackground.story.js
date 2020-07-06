import colors from '../../../constants/colors'
import Box from '../../Box/index'
import Icon from '../index'

export default () => ({
  components: { Box, Icon },
  data: () => ({
    colors,
  }),
  template: `
    <div class="flex flex-col items-start p-6">
      <Box v-for="color in colors" class="p-2" :backgroundColor="color" :key="color">
        <Icon
          :color="color"
          :colorIsBackground="true"
          name="badge"
        />
      </Box>
      <div class="p-2" style="background-color: #0f9;">
        <Icon class="text-heavy-black" name="badge" />
      </div>
    </div>
  `,
})
