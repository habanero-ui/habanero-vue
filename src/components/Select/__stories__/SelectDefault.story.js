import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import Select from '../index'

export default () => ({
  components: { Select },
  props: {
    error: {
      default: text('error', ''),
    },
    label: {
      default: text('label', 'This is a label'),
    },
    disabled: {
      default: boolean('disabled', false),
    },
  },
  data: () => ({
    selected: 1,
  }),
  template: `
    <div class="absolute inset-0 p-4">
      <div class="pb-4">
        <Select 
          :error="error" 
          :label="label"
          :disabled="disabled"
          v-model="selected">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </Select>

          Current Selected: {{ selected }}
      </div>
    </div>
  `,
  methods: {
    onSelectChange: action('onSelectChange'),
  },
})
