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
  template: `
    <div class="absolute inset-0">
      <Modal
        :isOpen="isOpen"
        :onIsOpenChange="onIsOpenChange">
        Some Content for the Modal
      </Modal>
    </div>
  `,
  methods: {
    onIsOpenChange: action('onIsOpenChange'),
  },
})
