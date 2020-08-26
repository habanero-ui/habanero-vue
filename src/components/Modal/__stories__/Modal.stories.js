import { action } from '@storybook/addon-actions'

import colors from '../../../constants/colors'
import Modal from '../index'
export { default as Default } from './ModalDefault.story'

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    confirmColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    disclaimers: {
      control: {
        type: 'check',
        options: ['Disclaimer A', 'Disclaimer B', 'Disclaimer C'],
      },
    },
    isCancelVisible: {
      control: 'boolean',
    },
    isConfirmVisible: {
      control: 'boolean',
    },
  },
  args: {
    cancelText: 'Cancel',
    confirmColor: 'black',
    confirmText: 'Confirm',
    disclaimers: [],
    helperText: 'Some Helper Text',
    isCancelDisabled: false,
    isCancelVisible: true,
    isConfirmVisible: true,
    isConfirmDisabled: false,
    isConfirmLoading: false,
    isOpen: true,
    onCancel: action('onCancel'),
    onConfirm: action('onConfirm'),
    onIsOpenChange: action('onIsOpenChange'),
    titleText: 'Title Text',
  },
}
