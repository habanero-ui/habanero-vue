<template>
  <Box
    class="modal"
    :class="{ 'modal--is-open': isOpen }"
    padding="gutter"
    @click.self="handleBackgroundClick"
  >
    <Box class="modal__window" paddingY="gutter">
      <Stack space="gutter">
        <ModalHeader
          v-if="helperText || titleText"
          :helperText="helperText"
          :onCloseModal="headerCloseModalHandler"
          :titleText="titleText"
        />
        <div v-if="$slots.default">
          <slot />
        </div>
        <Box v-if="disclaimers.length" paddingX="gutter">
          <ul class="pl-6 list-disc">
            <li v-for="(disclaimer, index) in disclaimers" :key="index">
              {{ disclaimer }}
            </li>
          </ul>
        </Box>
        <div v-if="$slots.bottom">
          <slot name="bottom" />
        </div>
        <ModalFooter
          v-if="onCancel || onConfirm"
          :cancelText="cancelText"
          :confirmColor="confirmColor"
          :confirmText="confirmText"
          :isCancelDisabled="isCancelDisabled"
          :isConfirmDisabled="isConfirmDisabled"
          :isConfirmLoading="isConfirmLoading"
          :isOpen="isOpen"
          :onCancel="onCancel"
          :onConfirm="onConfirm"
        />
      </Stack>
    </Box>
  </Box>
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
  computed: {
    headerCloseModalHandler() {
      return this.onCancel ? undefined : this.onIsOpenChange
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
      if (!this.onIsOpenChange) return

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
  @apply max-w-3xl rounded bg-white flex flex-col shadow-lg z-50 overflow-y-auto;
}
.modal--is-open {
  @apply pointer-events-auto opacity-100;
}
</style>
