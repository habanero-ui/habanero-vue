import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  data: () => ({
    sizes: ['small', 'medium', 'large'],
  }),
  template: `
    <div class="p-6">
      <div v-for="size in sizes" class="pb-4" :key="size">
        <Icon name="badge" :size="size" />
      </div>
    </div>
  `,
})
