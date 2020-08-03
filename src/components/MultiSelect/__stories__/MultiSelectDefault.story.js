import { action } from '@storybook/addon-actions'
import { boolean, number, object, text } from '@storybook/addon-knobs'

import MultiSelect from '../index'

export default () => ({
  components: { MultiSelect },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    error: {
      default: text('error', ''),
    },
    helperText: {
      default: text('helperText', 'Select some options'),
    },
    label: {
      default: text('label', 'Multiple Selection'),
    },
    maxTagCount: {
      default: number('maxTagCount', 4),
    },
    placeholder: {
      default: text('placeholder', 'Search...'),
    },
    selectedIds: {
      default: object('selectedIds', [
        'Alpha',
        'Beta',
        'Charlie',
        'Delta',
        'Echo',
      ]),
    },
  },
  data: () => ({
    items: [
      'Alpha',
      'Beta',
      'Charlie',
      'Delta',
      'Echo',
      'Foxtrot',
      'Golf',
      'Hotel',
      'India',
      'Juliet',
      'Kilo',
      'Lima',
    ],
  }),
  template: `
    <div class="p-6">
      <MultiSelect
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :items="items"
        :label="label"
        :maxTagCount="maxTagCount"
        :onSelectedIdsChange="onSelectedIdsChange"
        :placeholder="placeholder"
        :selectedIds="selectedIds"
      />
    </div>
  `,
  methods: {
    onSelectedIdsChange: action('onSelectedIdsChange'),
  },
})
