import { action } from '@storybook/addon-actions'

import DatePicker from '../index'

export default () => ({
  components: { DatePicker },
  data: () => ({
    maxDate: new Date().toLocaleDateString(),
    minDate: new Date('1900-01-01').toLocaleDateString(),
  }),
  template: `
    <div class="flex flex-col p-6">
      <DatePicker
        helperText="Select your birthday"
        label="Birthday"
        :onValueChange="onValueChange"
        placeholder="mm/dd/yyyy"
        :maxDate="maxDate"
        :minDate="minDate"
        mode="single" />
    </div>
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
