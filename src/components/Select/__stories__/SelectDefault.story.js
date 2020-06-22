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
      default: text('helperText', 'Select a color from the list below'),
    },
    label: {
      default: text('label', 'Colors'),
    },
  },
  data: () => ({
    selected: 1,
  }),
  template: `
    <div class="flex flex-col p-6">
      <Select 
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :label="label"
        v-model="selected">
          <option value="1">Red</option>
          <option value="2">Green</option>
          <option value="3">Blue</option>
        </Select>
        Current Selected: {{ selected }}
    </div>
  `,
  methods: {
    onSelectChange: action('onSelectChange'),
  },
})
