import LoadingIndicator from '../index'

export default () => ({
  components: { LoadingIndicator },
  data: () => ({
    sizes: ['small', 'medium', 'large'],
  }),
  template: `
    <div class="p-6">
      <LoadingIndicator v-for="size in sizes" class="mb-4" :key="size" :size="size" />
    </div>
  `,
})
