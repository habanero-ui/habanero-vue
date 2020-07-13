import { action } from '@storybook/addon-actions'
import { boolean, date, select, text } from '@storybook/addon-knobs'

import datePickerModes from '../../../constants/datePickerModes'
import DatePicker from '../index'

// TODO: Changing maxDate, minDate, and mode doesn't update the compoennt (because flatpickr needs to init itself)

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
      default: text('helperText', 'Select your birthday'),
    },
    label: {
      default: text('label', 'Birthday'),
    },
    placeholder: {
      default: text('placeholder', 'mm/dd/yyyy'),
    },
    maxDate: {
      default: date('maxDate', new Date()),
    },
    minDate: {
      default: date('minDate', new Date('1900-01-01')),
    },
    mode: {
      default: select('mode', datePickerModes, 'single'),
    },
    value: {
      default: text('value', ''),
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
        :placeholder="placeholder"
        :maxDate="maxDate"
        :minDate="minDate"
        :mode="mode"
        :value="value" />
    </div>
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
