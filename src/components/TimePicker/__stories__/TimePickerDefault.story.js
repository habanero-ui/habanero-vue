import { action } from '@storybook/addon-actions'
import { boolean, date, text } from '@storybook/addon-knobs'

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
    format: {
      default: text('format', 'h:i K'),
    },
    helperText: {
      default: text('helperText', 'Some Helper Text'),
    },
    label: {
      default: text('label', 'Some Label Text'),
    },
    maxTime: {
      default: date('maxTime', new Date('2020-01-01T20:00:00.000000Z')),
    },
    minTime: {
      default: date('minTime', new Date('2020-01-01T06:00:00.000000Z')),
    },
    placeholder: {
      default: text('placeholder', 'Some placeholder text'),
    },
    selectedDate: {
      default: date('selectedDate', new Date('2017-10-05T17:00:00.000000Z')),
    },
  },
  template: `
    <div>
      <TimePicker
        :disabled="disabled"
        :error="error"
        :format="format"
        :helperText="helperText"
        :label="label"
        :maxTime="new Date(maxTime)"
        :minTime="new Date(minTime)"
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
