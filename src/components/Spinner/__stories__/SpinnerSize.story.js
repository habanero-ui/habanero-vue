import Spinner from '../index'

export default () => ({
  components: { Spinner },
  data: () => ({
    sizes: ['small', 'medium', 'large'],
  }),
  template: `
    <div class="p-6">
      <Spinner v-for="size in sizes" class="mb-4" :key="size" :size="size" />
    </div>
  `,
})
