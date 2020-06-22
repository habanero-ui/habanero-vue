import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import Select from '../index'
import Typography from '../../Typography/index'

export default () => ({
  components: { Select, Typography },
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
    selected: 'orange',
  }),
  template: `
    <div class="flex flex-col p-6">
      <Select 
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :label="label"
        v-model="selected">
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="orange">orange</option>
          <option value="pink">pink</option>
          <option value="purple">purple</option>
        </Select>
        <Typography class="mt-2">Current Selected: <span :class="['text-' + selected]">{{ selected }}</span></Typography>
    </div>
  `,
  methods: {
    onSelectChange: action('onSelectChange'),
  },
})
