import { action } from '@storybook/addon-actions'

import statuses from '../../../constants/statuses'
import Toast from '../index'
export { default as Default } from './ToastDefault.story'

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    status: {
      control: {
        type: 'inline-radio',
        options: statuses,
      },
    },
  },
  args: {
    id: 'my-toast',
    label: 'Toast Label',
    message: 'Message text goes here',
    onClose: action('onClose'),
    status: 'info',
  },
}
