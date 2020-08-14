import { action } from '@storybook/addon-actions'

import TextArea from '../index'
export { default as Default } from './TextAreaDefault.story'

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
  args: {
    disabled: false,
    error: '',
    helperText: 'Provide a brief description of the item',
    label: 'Description',
    maxlength: 100,
    onValueChange: action('onValueChange'),
    placeholder: 'Enter description here...',
    showChars: true,
    value: '',
  },
}
