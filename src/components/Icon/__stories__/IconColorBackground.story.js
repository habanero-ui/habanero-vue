import colors from '../../../constants/colors'
import Icon from '../index'

export default () => ({
  components: { Icon },
  data: () => ({
    colors,
  }),
  template: `
    <div class="flex flex-col items-start p-6">
      <div v-for="color in colors" class="p-2" :class="getWrapperBGClass(color)" :key="color">
        <Icon
          :color="color"
          :colorIsBackground="true"
          name="badge"
        />
      </div>
      <div class="bg-purple p-2">
        <Icon class="text-heavy-black" name="badge" />
      </div>
    </div>
  `,
  methods: {
    getWrapperBGClass(color) {
      return color === 'none' ? 'bg-black' : `bg-${color}`
    },
  },
})