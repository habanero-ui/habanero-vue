import { action } from '@storybook/addon-actions'

import Toggle from '../index'
export { default as Default } from './ToggleDefault.story'
export { default as Stateful } from './ToggleStateful.story'

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium'],
      },
    },
  },
  args: {
    disabled: false,
    isChecked: false,
    onIsCheckedChange: action('onIsCheckedChange'),
    size: 'medium',
    text: 'Flip out',
  },
}
