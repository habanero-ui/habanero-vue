import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  data: () => ({
    actions: ['check', 'close', 'minus', 'plus', 'swap'],
    arrows: ['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right'],
    chevrons: ['chevron-up', 'chevron-down', 'chevron-left', 'chevron-right'],
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
      'new-window',
      'options',
      'settings',
      'speaker',
    ],
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
    sorts: ['sort', 'sort-ascending', 'sort-descending'],
    toasts: ['checkmark', 'error', 'info', 'warning'],
  }),
  template: `
    <div class="p-6">
      <div class="flex items-center mb-6">
        <Icon v-for="sort in sorts" :key="sort" :name="sort" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="chevron in chevrons" :key="chevron" :name="chevron" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="arrow in arrows" :key="arrow" :name="arrow" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="toast in toasts" :key="toast" :name="toast" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="action in actions" :key="action" :name="action" class="mr-4" />
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
        <Icon v-for="object in objects" :key="object" :name="object" class="mr-4" />
      </div>
    </div>
  `,
})
