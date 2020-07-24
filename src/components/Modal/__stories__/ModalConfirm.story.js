import { action } from '@storybook/addon-actions'

import Modal from '../index'

export default () => ({
  components: { Modal },
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
        :isOpen="true"
        :onCancel="onCancel"
        :onConfirm="onConfirm"
        :onIsOpenChange="onIsOpenChange"
        titleText="Remove Blanket">
        <div class="px-6">Are you sure you want to remove the blanket?</div>
      </Modal>
    </div>
  `,
  methods: {
    onCancel: action('onCancel'),
    onConfirm: action('onConfirm'),
    onIsOpenChange: action('onIsOpenChange'),
  },
})
