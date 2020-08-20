import { action } from '@storybook/addon-actions'

import Select from '../index'
export { default as Default } from './SelectDefault.story'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5],
      },
    },
  },
  args: {
    disabled: false,
    error: '',
    helperText: 'Some Helper Text',
    label: 'Some Label Text',
    onValueChange: action('onValueChange'),
    placeholder: 'Some placeholder text',
    value: undefined,
  },
}
