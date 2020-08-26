<template>
  <div
    class="modal"
    :class="{ 'modal--is-open': isOpen }"
    @click.self="handleBackgroundClick"
  >
    <Box class="modal__window" paddingY="gutter">
      <Stack space="gutter">
        <ModalHeader
          :helperText="helperText"
          :onCloseModal="onIsOpenChange"
          :titleText="titleText"
        />
        <div>
          <slot />
        </div>
        <Box
          v-if="disclaimers.length"
          backgroundColor="offwhite"
          padding="gutter"
          class="modal__disclaimers"
        >
          <ul class="pl-6 list-disc">
            <li v-for="(disclaimer, index) in disclaimers" :key="index">
              {{ disclaimer }}
            </li>
          </ul>
        </Box>
        <ModalFooter
          v-if="onCancel || onConfirm"
          :cancelText="cancelText"
          :confirmColor="confirmColor"
          :confirmText="confirmText"
          :isCancelDisabled="isCancelDisabled"
          :isConfirmDisabled="isConfirmDisabled"
          :isConfirmLoading="isConfirmLoading"
          :onCancel="onCancel"
          :onConfirm="onConfirm"
        />
      </Stack>
    </Box>
  </div>
</template>

<script>
import Box from '../Box/index'
import Stack from '../Stack/index'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'

export default {
  components: {
    Box,
    ModalFooter,
    ModalHeader,
    Stack,
  },
  props: {
    cancelText: {
      default: 'Cancel',
      type: String,
    },
    confirmColor: {
      default: undefined,
      type: String,
    },
    confirmText: {
      default: 'Confirm',
      type: String,
    },
    disclaimers: {
      default: () => [],
      type: Array,
    },
    helperText: {
      default: '',
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
      default: undefined,
      type: Function,
    },
    titleText: {
      default: '',
      type: String,
    },
  },
  watch: {
    isOpen() {
      if (!this.isOpen) {
        this.checked = []
      }
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
  @apply fixed inset-0 top-0 flex items-center justify-center w-full min-h-screen overflow-hidden transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none bg-black-half;
  z-index: 60;
}
.modal__window {
  @apply rounded bg-white flex flex-col w-11/12 max-w-3xl mx-auto shadow-lg z-50 overflow-y-auto;
}
.modal__disclaimers {
  @apply border-t border-b border-border;
}
.modal--is-open {
  @apply pointer-events-auto opacity-100;
}
</style>
