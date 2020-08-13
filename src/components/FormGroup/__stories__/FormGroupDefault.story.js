import { text } from '@storybook/addon-knobs'

import Checkbox from '../../Checkbox/index'
import FormGroup from '../index'

export default () => ({
  components: { Checkbox, FormGroup },
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
    <FormGroup :error="error" :helperText="helperText" :label="label" :space="space">
      <Checkbox text="Alpha" />
    </FormGroup>
  `,
})
