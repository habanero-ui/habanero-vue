import colors from '../../../constants/colors'
import Spinner from '../index'

export default () => ({
  components: { Spinner },
  data: () => ({
    colors,
  }),
  template: `
    <div class="flex flex-col items-start p-6">
      <div v-for="color in colors" class="p-2" :class="getWrapperBGClass(color)" :key="color">
        <Spinner
          :color="color"
          :colorIsBackground="true"
        />
      </div>
      <div class="bg-purple p-2">
        <Spinner class="text-heavy-black" name="badge" />
      </div>
    </div>
  `,
  methods: {
    getWrapperBGClass(color) {
      return color === 'none' ? 'bg-black' : `bg-${color}`
    },
  },
})
