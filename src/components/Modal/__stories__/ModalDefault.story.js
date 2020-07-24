import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'

import colors from '../../../constants/colors'
import Modal from '../index'

export default () => ({
  components: { Modal },
  props: {
    cancelText: {
      default: text('cancelText', 'Cancel'),
    },
    confirmColor: {
      default: select('confirmColor', colors, 'black'),
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
        :confirmColor="confirmColor"
        :confirmText="confirmText"
        :helperText="helperText"
        :isOpen="isOpen"
        :onCancel="isCancelVisible ? onCancel : undefined"
        :onConfirm="isConfirmVisible ? onConfirm : undefined"
        :onIsOpenChange="onIsOpenChange"
        :titleText="titleText">
        <div class="px-6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </div>
      </Modal>
    </div>
  `,
  methods: {
    onCancel: action('onCancel'),
    onConfirm: action('onConfirm'),
    onIsOpenChange: action('onIsOpenChange'),
  },
})
