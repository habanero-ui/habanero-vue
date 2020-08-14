import { action } from '@storybook/addon-actions'

import RadioButton from '../index'
export { default as Default } from './RadioButtonDefault.story'
export { default as TextWrapping } from './RadioButtonTextWrapping.story'

export default {
  title: 'RadioButton',
  component: RadioButton,
  args: {
    disabled: false,
    isChecked: false,
    onIsCheckedChange: action('onIsCheckedChange'),
    text: 'Some Text',
    value: 'a',
  },
}
