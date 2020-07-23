import { action } from '@storybook/addon-actions'

import MultiSelect from '../index'

export default () => ({
  components: { MultiSelect },
  data: () => ({
    items: ['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo'],
  }),
  template: `
    <div class="p-6">
      <MultiSelect
        :items="items"
        :onSelectedIdsChange="onSelectedIdsChange"
      />
    </div>
  `,
  methods: {
    onSelectedIdsChange: action('onSelectedIdsChange'),
  },
})
