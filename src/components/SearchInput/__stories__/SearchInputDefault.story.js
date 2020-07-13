import { action } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'

import SearchInput from '../index'

export default () => ({
  components: { SearchInput },
  props: {
    delay: {
      default: number('delay', 500),
    },
    disabled: {
      default: boolean('disabled', false),
    },
    error: {
      default: text('error', ''),
    },
    helperText: {
      default: text(
        'helperText',
        'Enter your name as it appears on your birth certificate',
      ),
    },
    label: {
      default: text('label', 'Legal Name'),
    },
    placeholder: {
      default: text('placeholder', 'John Michael Doe'),
    },
    value: {
      default: text('value', 'Query Value'),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <SearchInput
        :delay="delay"
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :label="label"
        :onValueChange="onValueChange"
        :onSearch="onSearch"
        :placeholder="placeholder"
        :value="value"
      />
    </div>
  `,
  methods: {
    onSearch: action('onSearch'),
    onValueChange: action('onValueChange'),
  },
})
