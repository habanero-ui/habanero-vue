import colors from '../../../constants/colors'
import LoadingIndicator from '../index'

export default () => ({
  components: { LoadingIndicator },
  data: () => ({
    colors,
  }),
  template: `
    <div class="flex flex-col items-start p-6">
      <div v-for="color in colors" class="p-2" :class="getWrapperBGClass(color)" :key="color">
        <LoadingIndicator
          :color="color"
          :colorIsBackground="true"
        />
      </div>
      <div class="bg-purple p-2">
        <LoadingIndicator class="text-heavy-black" name="badge" />
      </div>
    </div>
  `,
  methods: {
    getWrapperBGClass(color) {
      return color === 'none' ? 'bg-black' : `bg-${color}`
    },
  },
})
