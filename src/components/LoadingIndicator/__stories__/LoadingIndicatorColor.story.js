import colors from '../../../constants/colors'
import LoadingIndicator from '../index'

export default () => ({
  components: { LoadingIndicator },
  data: () => ({
    colors,
  }),
  template: `
    <div class="p-6">
      <LoadingIndicator
        v-for="color in colors"
        class="mb-4"
        :color="color"
        :key="color"
      />
    </div>
  `,
})
