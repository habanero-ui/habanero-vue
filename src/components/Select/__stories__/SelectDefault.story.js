import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'

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
    value: {
      default: select('value', {
        [undefined]: undefined,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      }),
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
        :placeholder="placeholder"
        :value="value">
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
