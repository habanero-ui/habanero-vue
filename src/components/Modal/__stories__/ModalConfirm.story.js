import { action } from '@storybook/addon-actions'

import Modal from '../index'

export default () => ({
  components: { Modal },
  data: () => ({
    confirmations: [
      { isChecked: false, text: 'You will be cold' },
      { isChecked: false, text: 'You will have to get up' },
      { isChecked: false, text: 'This action cannot be undone' },
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
        Are you sure you want to remove the blanket?
      </Modal>
    </div>
  `,
  methods: {
    onCancel: action('onCancel'),
    onConfirm: action('onConfirm'),
    onIsOpenChange: action('onIsOpenChange'),
  },
})
