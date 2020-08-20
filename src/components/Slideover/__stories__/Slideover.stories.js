import { action } from '@storybook/addon-actions'

import Slideover from '../index'
export { default as Default } from './SlideoverDefault.story'
export { default as Stateful } from './SlideoverStateful.story'

export default {
  title: 'Components/Slideover',
  component: Slideover,
  args: {
    backText: 'Back',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    destroyText: 'Destroy',
    isCancelVisible: true,
    isCancelDisabled: false,
    isConfirmDisabled: false,
    isConfirmLoading: false,
    isConfirmVisible: true,
    isDestroyVisible: true,
    isOpen: true,
    isOpenInNewWindowVisible: true,
    onCancel: action('onCancel'),
    onConfirm: action('onConfirm'),
    onDestroy: action('onDestroy'),
    onIsOpenChange: action('onIsOpenChange'),
    onOpenInNewWindow: action('onOpenInNewWindow'),
    openInNewWindowText: 'Open in new window',
  },
}
