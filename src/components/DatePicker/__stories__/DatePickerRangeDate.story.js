import { action } from '@storybook/addon-actions'

import DatePicker from '../index'

export default () => ({
  components: { DatePicker },
  template: `
    <div class="flex flex-col p-6">
      <DatePicker
        helperText="Select the days you will be on vacation"
        label="Vacation Days"
        :onValueChange="onValueChange"
        placeholder="Select days..."
        mode="range" />
    </div>
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
