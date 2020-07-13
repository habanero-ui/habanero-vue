import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import DatePicker from '../index'

export default () => ({
  components: { DatePicker },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    error: {
      default: text('error', ''),
    },
    helperText: {
      default: text('helperText', 'Some Helper Text'),
    },
    label: {
      default: text('label', 'Some Label Text'),
    },
    placeholder: {
      default: text('placeholder', 'Some placeholder text'),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <DatePicker
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :label="label"
        :onValueChange="onValueChange"
        :placeholder="placeholder" />
    </div>
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
