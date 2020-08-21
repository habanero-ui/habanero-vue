import { action } from '@storybook/addon-actions'

import Checkbox from '../index'
export { default as Default } from './CheckboxDefault.story'
export { default as Stateful } from './CheckboxStateful.story'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
    isChecked: false,
    onIsCheckedChange: action('onIsCheckedChange'),
    text: 'Check me out',
  },
}
