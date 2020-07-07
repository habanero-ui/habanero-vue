import colors from '../../../constants/colors'
import ProgressBar from '../index'
import Stack from '../../Stack/index'

export default () => ({
  components: {
    ProgressBar,
    Stack,
  },
  data: () => ({
    colors,
  }),
  template: `
    <div class="p-6">
      <Stack align="start" space="2">
        <ProgressBar v-for="color in colors" :color="color" :key="color" :value="20" />
      </Stack>
    </div>
  `,
})
