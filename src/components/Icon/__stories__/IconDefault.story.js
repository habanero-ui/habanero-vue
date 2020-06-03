import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  data: () => ({
    names: [
      'apartment',
      'badge',
      'bell',
      'currency',
      'employees',
      'file-download',
      'file-upload',
      'flag',
      'hotel',
      'info',
      'map-pin',
      'settings',
      'user-delete',
      'user-star',
    ],
  }),
  template: `
    <div class="flex items-center p-6">
      <Icon v-for="name in names" :name="name" class="mr-4" />
    </div>
  `,
})
