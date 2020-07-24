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
          v-if="confirmations.length"
          backgroundColor="offwhite"
          padding="gutter"
          class="modal__confirmations"
        >
          <Checkbox
            v-for="(confirmation, index) of confirmations"
            :key="index"
            :isChecked="isChecked(index)"
            :onIsCheckedChange="
              ($event) => handleConfirmationChange(index, $event)
            "
            :text="confirmation"
          />
        </Box>
        <ModalFooter
          :cancelText="cancelText"
          :confirmColor="confirmColor"
          :confirmText="confirmText"
          :isCancelDisabled="isCancelDisabled"
          :isConfirmDisabled="!canConfirm || isConfirmDisabled"
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
import Checkbox from '../Checkbox/index'
import Stack from '../Stack/index'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'

export default {
  components: {
    Box,
    Checkbox,
    ModalFooter,
    ModalHeader,
    Stack,
  },
  props: {
    cancelText: {
      default: 'Cancel',
      type: String,
    },
    confirmations: {
      default: () => [],
      type: Array,
    },
    confirmColor: {
      default: undefined,
      type: String,
    },
    confirmText: {
      default: 'Confirm',
      type: String,
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
      default: () => {},
      type: Function,
    },
    titleText: {
      default: '',
      type: String,
    },
  },
  data: () => ({
    checked: [],
  }),
  computed: {
    canConfirm() {
      return this.checked.length === this.confirmations.length
    },
  },
  methods: {
    add(index) {
      if (this.checked.indexOf(index) === -1) {
        this.checked.push(index)
      }
    },

    handleBackgroundClick() {
      this.onIsOpenChange(false)
    },

    handleConfirmationChange(index, add) {
      return add ? this.add(index) : this.remove(index)
    },

    isChecked(index) {
      return Boolean(this.checked.filter((c) => c === index).length)
    },

    remove(index) {
      this.checked = this.checked.filter((c) => c !== index)
    },
  },
}
</script>

<style scoped>
.modal {
  @apply fixed inset-0 top-0 flex items-center justify-center w-full min-h-screen transition-opacity duration-300 ease-in-out overflow-hidden opacity-0 pointer-events-none bg-black-half;
}
.modal__window {
  @apply rounded bg-white flex flex-col w-11/12 max-w-3xl mx-auto shadow-lg z-50 overflow-y-auto;
}
.modal__confirmations {
  @apply border-t border-b border-border;
}
.modal--is-open {
  @apply pointer-events-auto opacity-100;
}
</style>
