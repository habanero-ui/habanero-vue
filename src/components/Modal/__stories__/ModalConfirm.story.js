import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'

import Modal from '../index'

export default () => ({
  components: { Modal },
  props: {
    isOpen: {
      default: boolean('isOpen', true),
    },
  },
  data: () => ({
    confirmations: [
      'You will be cold',
      'You will have to get up',
      'This action cannot be undone',
    ],
  }),
  template: `
    <div class="absolute inset-0">
      <Modal
        cancelText="Cancel"
        :confirmations="confirmations"
        confirmColor="error"
        confirmText="Remove"
        :isOpen="isOpen"
        :onCancel="onCancel"
        :onConfirm="onConfirm"
        :onIsOpenChange="onIsOpenChange"
        titleText="Remove Blanket">
        <div class="px-6">
          Are you sure you want to remove the blanket?
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
