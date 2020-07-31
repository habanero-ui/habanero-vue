import { action } from '@storybook/addon-actions'
import { number, object } from '@storybook/addon-knobs'

import MultiSelect from '../index'

export default () => ({
  components: { MultiSelect },
  props: {
    maxTagCount: {
      default: number('maxTagCount', 4),
    },
    selectedIds: {
      default: object('selectedIds', ['Alpha', 'Delta', 'Echo']),
    },
  },
  data: () => ({
    items: ['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo'],
  }),
  template: `
    <div class="p-6">
      <MultiSelect
        :items="items"
        :maxTagCount="maxTagCount"
        :onSelectedIdsChange="onSelectedIdsChange"
        :selectedIds="selectedIds"
      />
    </div>
  `,
  methods: {
    onSelectedIdsChange: action('onSelectedIdsChange'),
  },
})
