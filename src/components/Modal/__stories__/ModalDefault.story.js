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
  },
  template: `
    <div class="absolute inset-0">
      <Modal
        :isCancelDisabled="isCancelDisabled"
        :isConfirmDisabled="isConfirmDisabled"
        :isConfirmLoading="isConfirmLoading"
        :cancelText="cancelText"
        :confirmText="confirmText"
        :isOpen="isOpen"
        :onCancel="isCancelVisible ? onCancel : undefined"
        :onConfirm="isConfirmVisible ? onConfirm : undefined"
        :onIsOpenChange="onIsOpenChange">
        Some Content for the Modal
      </Modal>
    </div>
  `,
  methods: {
    onCancel: action('onCancel'),
    onConfirm: action('onConfirm'),
    onIsOpenChange: action('onIsOpenChange'),
  },
})
