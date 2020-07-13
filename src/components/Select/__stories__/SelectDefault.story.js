import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import Select from '../index'

export default () => ({
  components: { Select },
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
    <div class="p-6">
      <Select
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :label="label"
        :onValueChange="onValueChange"
        :placeholder="placeholder">
        <option :value="1">Alpha</option>
        <option :value="2">Bravo</option>
        <option :value="3">Charlie</option>
        <option :value="4">Delta</option>
        <option :value="5">Echo</option>
      </Select>
    </div>
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
