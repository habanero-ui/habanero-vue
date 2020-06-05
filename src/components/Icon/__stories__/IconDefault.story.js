import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  data: () => ({
    movements: ['chevron-up', 'chevron-down', 'chevron-left', 'chevron-right'],
    objects: [
      'apartment',
      'badge',
      'bell',
      'currency',
      'file-download',
      'file-upload',
      'flag',
      'hotel',
      'info',
      'map-pin',
      'settings',
    ],
    persons: ['employees', 'user-delete', 'user-star'],
  }),
  template: `
    <div class="p-6">
      <div class="flex items-center mb-6">
        <Icon v-for="movement in movements" :key="movement" :name="movement" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="object in objects" :key="object" :name="object" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="person in persons" :key="person" :name="person" class="mr-4" />
      </div>
    </div>
  `,
})
