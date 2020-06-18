<template>
  <div
    class="modal"
    :class="{ 'modal--is-open': isOpen }"
    @click.self="handleBackgroundClick"
  >
    <div class="modal__window">
      <div class="modal__content">
        <slot />
      </div>
      <ModalFooter
        :cancelText="cancelText"
        :confirmText="confirmText"
        :isCancelDisabled="isCancelDisabled"
        :isConfirmDisabled="isConfirmDisabled"
        :isConfirmLoading="isConfirmLoading"
        :onCancel="onCancel"
        :onConfirm="onConfirm"
      />
    </div>
  </div>
</template>

<script>
import ModalFooter from './ModalFooter'

export default {
  components: {
    ModalFooter,
  },
  props: {
    cancelText: {
      default: 'Cancel',
      type: String,
    },
    confirmText: {
      default: 'Confirm',
      type: String,
    },
    isCancelDisabled: {
      default: false,
      type: Boolean,
    },
    isConfirmDisabled: {
      default: false,
      type: Boolean,
    },
    isConfirmLoading: {
      default: false,
      type: Boolean,
    },
    isOpen: {
      default: undefined,
      type: Boolean,
    },
    onCancel: {
      default: undefined,
      type: Function,
    },
    onConfirm: {
      default: undefined,
      type: Function,
    },
    onIsOpenChange: {
      default: () => {},
      type: Function,
    },
  },
  methods: {
    handleBackgroundClick() {
      this.onIsOpenChange(false)
    },
  },
}
</script>

<style scoped>
.modal {
  @apply absolute inset-0 top-0 flex items-center justify-center w-full min-h-screen overflow-hidden opacity-0 pointer-events-none bg-black-half;
  transition: opacity 250ms ease;
}
.modal__window {
  @apply p-4 rounded bg-white flex flex-col w-11/12 mx-auto shadow-lg z-50 overflow-y-auto;
}
.modal__content {
  @apply mb-6;
}
.modal--is-open {
  @apply pointer-events-auto opacity-100;
}
</style>
