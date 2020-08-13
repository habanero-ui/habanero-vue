import { action } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'

import TextArea from '../index'

export default () => ({
  components: { TextArea },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    error: {
      default: text('error', ''),
    },
    helperText: {
      default: text('helperText', 'Provide a brief description of the item'),
    },
    label: {
      default: text('label', 'Description'),
    },
    maxlength: {
      default: number('maxlength', undefined),
    },
    placeholder: {
      default: text('placeholder', 'Enter description here...'),
    },
    showChars: {
      default: boolean('showChars', true),
    },
    value: {
      default: text('value', ''),
    },
  },
  template: `
    <TextArea
      :disabled="disabled"
      :error="error"
      :helperText="helperText"
      :label="label"
      :onValueChange="onValueChange"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :showChars="showChars"
      :value="value"
    />
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
