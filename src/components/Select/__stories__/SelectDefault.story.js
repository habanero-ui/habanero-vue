import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import Select from '../index'

export default () => ({
  components: { Select },
  props: {
    options: {
      default: [
        { label: 'Select 1', value: 1 },
        { label: 'Select 2', value: 2 },
        { label: 'Select 3', value: 3 },
      ],
    },
    error: {
      default: text('error', ''),
    },
    label: {
      default: text('label', 'This is a label'),
    },
    disabled: {
      default: boolean('disabled', true),
    },
  },
  template: `
    <div class="absolute inset-0 p-4">
      <div class="pb-4">
        <Select 
          :options="options" 
          :error="error" 
          :label="label"
          @onSelectChange="onSelectChange"/>
      </div>

      <div>
        <Select :options="options" :disabled="disabled"/>
      </div>
    </div>
  `,
  methods: {
    onSelectChange: action('onSelectChange'),
  },
})
