import { action } from '@storybook/addon-actions'

import Select from '../index'
export { default as Default } from './SelectDefault.story'

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: { [undefined]: undefined, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
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
