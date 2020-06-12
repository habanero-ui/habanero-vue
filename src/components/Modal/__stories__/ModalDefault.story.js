import { action } from '@storybook/addon-actions'
import Modal from '../index'

export default () => ({
  components: { Modal },
  template: `
    <div class="absolute inset-0">
      <Modal
        :isOpen="true"
        @isOpenChange="isOpenChange">
        Some Content for the Modal
      </Modal>
    </div>
  `,
  methods: {
    isOpenChange: action('handleIsOpenChange'),
  },
})
