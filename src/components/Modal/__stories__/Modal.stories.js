import { action } from '@storybook/addon-actions'

import colors from '../../../constants/colors'
import Modal from '../index'
export { default as Default } from './ModalDefault.story'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    confirmColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
  },
  args: {
    cancelText: 'Cancel',
    confirmColor: 'black',
    confirmText: 'Confirm',
    confirmations: [],
    helperText: 'Some Helper Text',
    isCancelDisabled: false,
    isConfirmDisabled: false,
    isConfirmLoading: false,
    isOpen: true,
    onCancel: action('onCancel'),
    onConfirm: action('onConfirm'),
    onIsOpenChange: action('onIsOpenChange'),
    titleText: 'Title Text',
  },
}
