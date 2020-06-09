import colors from '../../../constants/colors'
import Spinner from '../index'

export default () => ({
  components: { Spinner },
  data: () => ({
    colors,
  }),
  template: `
    <div class="p-6">
      <Spinner
        v-for="color in colors"
        class="mb-4"
        :color="color"
        :key="color"
      />
    </div>
  `,
})
