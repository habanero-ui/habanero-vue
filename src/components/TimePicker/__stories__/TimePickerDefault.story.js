import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import TimePicker from '../index'

export default () => ({
  components: { TimePicker },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    error: {
      default: text('error', ''),
    },
    helperText: {
      default: text('helperText', 'Enter the time your shift started'),
    },
    label: {
      default: text('label', 'Start Time'),
    },
    placeholder: {
      default: text('placeholder', 'Select time...'),
    },
    value: {
      default: text(
        'value',
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      ),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <TimePicker
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :label="label"
        :onValueChange="onValueChange"
        :placeholder="placeholder"
        :value="value" />
    </div>
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
