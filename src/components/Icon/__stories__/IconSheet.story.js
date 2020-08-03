import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  data: () => ({
    actions: ['check', 'close', 'minus', 'plus', 'swap', 'search'],
    arrows: ['arrow-up', 'arrow-down', 'arrow-left', 'arrow-right'],
    boxes: ['edit', 'new-window'],
    calendars: ['calendar-date', 'calendar-time'],
    chevrons: ['chevron-up', 'chevron-down', 'chevron-left', 'chevron-right'],
    clocks: ['time-clock', 'time-money', 'time-progress'],
    files: ['file-download', 'file-upload', 'file-paper-check'],
    objects: [
      'apartment',
      'award',
      'baby',
      'badge',
      'bell',
      'chart',
      'cog',
      'currency',
      'explore-user',
      'flag',
      'hotel',
      'luggage',
      'map-pin',
      'medical',
      'options',
      'scale',
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
      'group-home',
      'user-add',
      'user-delete',
      'user-security',
      'user-star',
      'user-time',
    ],
    savings: [
      'bus',
      'child',
      'eye',
      'face-happy',
      'fire',
      'parking',
      'stethoscope',
      'tooth',
      'walking-aid',
    ],
    sorts: ['sort', 'sort-ascending', 'sort-descending'],
    toasts: ['checkmark', 'error', 'help', 'info', 'warning'],
  }),
  template: `
    <div class="p-6">
      <div class="flex items-center mb-6">
        <Icon name="menu" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="box in boxes" :key="box" :name="box" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="calendar in calendars" :key="calendar" :name="calendar" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="file in files" :key="file" :name="file" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="sort in sorts" :key="sort" :name="sort" class="mr-4" />
      </div>
      <div class="flex items-center mb-6">
        <Icon v-for="clock in clocks" :key="clock" :name="clock" class="mr-4" />
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
