<template>
  <footer v-if="onCancel || onConfirm" class="modal-footer">
    <Stack direction="row" space="6">
      <Button
        v-if="onCancel"
        :disabled="isCancelDisabled"
        :text="cancelText"
        variant="secondary"
        @click.native="onCancel"
      />
      <Button
        v-if="onConfirm"
        :disabled="isConfirmDisabled"
        :isLoading="isConfirmLoading"
        :text="confirmText"
        @click.native="onConfirm"
      />
    </Stack>
  </footer>
</template>

<script>
import Button from '../Button/index'
import Stack from '../Stack/index'

export default {
  components: {
    Button,
    Stack,
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
    onCancel: {
      default: undefined,
      type: Function,
    },
    onConfirm: {
      default: undefined,
      type: Function,
    },
  },
}
</script>

<style scoped>
.modal-footer {
  @apply mt-6;
}
</style>
