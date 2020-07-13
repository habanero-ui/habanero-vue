import { action } from '@storybook/addon-actions'

import DatePicker from '../index'

export default () => ({
  components: { DatePicker },
  template: `
    <div class="flex flex-col p-6">
      <DatePicker
        helperText="Select the days you were absent"
        label="Absences"
        :onValueChange="onValueChange"
        placeholder="Select days..."
        mode="multiple" />
    </div>
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
