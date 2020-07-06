import colors from '../../../constants/colors'
import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  data: () => ({
    colors,
  }),
  template: `
    <div class="p-6">
      <div v-for="color in colors" class="pb-4" :key="color">
        <Icon name="badge" :color="color" />
      </div>
      <Icon class="mb-4" name="badge" style="color: #0f9;" />
    </div>
  `,
})
