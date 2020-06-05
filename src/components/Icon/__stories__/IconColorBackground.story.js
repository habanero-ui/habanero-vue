import Icon from '../index'

export default () => ({
  components: { Icon },
  data: () => ({
    colors: ['none', 'error', 'info', 'subtle', 'success', 'warning'],
  }),
  template: `
    <div class="items-start p-6">
      <div v-for="color in colors" class="p-2 w-10" :class="getWrapperBGClass(color)" :key="color">
        <Icon
          :color="color"
          :colorIsBackground="true"
          name="badge"
        />
      </div>
      <div class="bg-purple p-2 w-10">
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
