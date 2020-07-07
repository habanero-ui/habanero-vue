import colors from '../../../constants/colors'
import ProgressBar from '../index'

export default () => ({
  components: { ProgressBar },
  data: () => ({
    colors,
  }),
  template: `
    <div class="p-6">
      <div v-for="color in colors" class="flex justify-start mb-2" :key="color">
        <ProgressBar v-bind:value="20" :color="color" />
      </div>
    </div>
  `,
})
