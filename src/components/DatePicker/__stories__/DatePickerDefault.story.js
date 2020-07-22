import { action } from '@storybook/addon-actions'
import { boolean, date, text } from '@storybook/addon-knobs'

import DateTimePicker from '../index'

export default () => ({
  components: { DateTimePicker },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    error: {
      default: text('error', ''),
    },
    format: {
      default: text('format', 'm/d/Y'),
    },
    helperText: {
      default: text('helperText', 'Some Helper Text'),
    },
    label: {
      default: text('label', 'Some Label Text'),
    },
    maxDate: {
      default: date('maxDate', new Date('3000-01-01T00:00:00.000000Z')),
    },
    minDate: {
      default: date('minDate', new Date('2000-01-01T00:00:00.000000Z')),
    },
    placeholder: {
      default: text('placeholder', 'Some placeholder text'),
    },
    selectedDate: {
      default: date('selectedDate', new Date('2020-01-02T00:00:00.000000Z')),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <DateTimePicker
        :disabled="disabled"
        :error="error"
        :format="format"
        :helperText="helperText"
        :label="label"
        :maxDate="maxDate ? new Date(maxDate) : null"
        :minDate="minDate ? new Date(minDate) : null"
        :onSelectedDateChange="onSelectedDateChange"
        :placeholder="placeholder"
        :selectedDate="new Date(selectedDate)"
      />
      <div class="mt-6">UTC: {{ new Date(selectedDate).toLocaleString("en-US", { timeZone: "UTC" }) }}</div>
    </div>
  `,
  methods: {
    onSelectedDateChange: action('onSelectedDateChange'),
  },
})
