import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import Modal from '../index'

export default () => ({
  components: { Modal },
  props: {
    cancelText: {
      default: text('cancelText', 'Cancel'),
    },
    confirmText: {
      default: text('confirmText', 'Confirm'),
    },
    helperText: {
      default: text('helperText', 'Optional Label'),
    },
    isCancelVisible: {
      default: boolean('isCancelVisible', true),
    },
    isCancelDisabled: {
      default: boolean('isCancelDisabled', false),
    },
    isConfirmDisabled: {
      default: boolean('isConfirmDisabled', false),
    },
    isConfirmLoading: {
      default: boolean('isConfirmLoading', false),
    },
    isConfirmVisible: {
      default: boolean('isConfirmVisible', true),
    },
    isOpen: {
      default: boolean('isOpen', true),
    },
    titleText: {
      default: text('titleText', 'Modal Title'),
    },
  },
  template: `
    <div class="absolute inset-0">
      <Modal
        :isCancelDisabled="isCancelDisabled"
        :isConfirmDisabled="isConfirmDisabled"
        :isConfirmLoading="isConfirmLoading"
        :cancelText="cancelText"
        :confirmText="confirmText"
        :helperText="helperText"
        :isOpen="isOpen"
        :onCancel="isCancelVisible ? onCancel : undefined"
        :onConfirm="isConfirmVisible ? onConfirm : undefined"
        :onIsOpenChange="onIsOpenChange"
        :titleText="titleText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      </Modal>
    </div>
  `,
  methods: {
    onCancel: action('onCancel'),
    onConfirm: action('onConfirm'),
    onIsOpenChange: action('onIsOpenChange'),
  },
})
