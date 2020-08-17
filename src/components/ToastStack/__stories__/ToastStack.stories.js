import { action } from '@storybook/addon-actions'

import toastStackDirections from '../../../constants/toastStackDirections'
import ToastStack from '../index'
export { default as Default } from './ToastStackDefault.story'
export { default as Stateful } from './ToastStackStateful.story'

export default {
  title: 'ToastStack',
  component: ToastStack,
  argTypes: {
    direction: {
      control: {
        type: 'inline-radio',
        options: toastStackDirections,
      },
    },
  },
  args: {
    direction: 'down',
    onToastRemove: action('onToastRemove'),
    onToastsChange: action('onToastsChange'),
  },
}
