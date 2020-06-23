import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  data: () => ({
    movements: [
      'arrow-up',
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'chevron-up',
      'chevron-down',
      'chevron-left',
      'chevron-right',
      'sort',
      'sort-ascending',
      'sort-descending',
    ],
    objects: [
      'apartment',
      'award',
      'badge',
      'bell',
      'calendar-time',
      'currency',
      'file-download',
      'file-upload',
      'flag',
      'hotel',
      'map-pin',
      'options',
      'settings',
      'speaker',
    ],
    operations: ['close', 'minus', 'plus', 'new-window'],
    perks: [
      'boat',
      'certificate',
      'furniture',
      'heartbeat',
      'ring',
      'tablet-mobile',
      'theater',
      'umbrella',
    ],
    persons: [
      'group-chat',
      'group-check',
      'user-delete',
      'user-security',
      'user-star',
      'user-time',
    ],
    savings: [
      'bus',
      'child',
      'eye',
      'fire',
      'parking',
      'stethoscope',
      'tooth',
      'walking-aid',
    ],
    toasts: ['checkmark', 'error', 'info', 'warning'],
  }),
  template: `
    <div class="p-6">
      <div class="flex items-center mb-6">
        <Icon v-for="toast in toasts" :key="toast" :name="toast" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="operation in operations" :key="operation" :name="operation" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="person in persons" :key="person" :name="person" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="perk in perks" :key="perk" :name="perk" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="saving in savings" :key="saving" :name="saving" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="movement in movements" :key="movement" :name="movement" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="object in objects" :key="object" :name="object" class="mr-4" />
      </div>
    </div>
  `,
})
