import { text } from '@storybook/addon-knobs'
import Checkbox from '../../Checkbox/index'
import FormLabel from '../index'

export default () => ({
  components: { Checkbox, FormLabel },
  props: {
    error: {
      default: text('error', ''),
    },
    helperText: {
      default: text('helperText', ''),
    },
    label: {
      default: text('label', 'Some Label Text'),
    },
    space: {
      default: text('space', 'medium'),
    },
  },
  template: `
    <div class="p-6">
      <FormLabel :error="error" :helperText="helperText" :label="label" :space="space">
        <Checkbox text="Alpha" />
      </FormLabel>
    </div>
  `,
})
