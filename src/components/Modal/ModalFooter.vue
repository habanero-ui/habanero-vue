<template>
  <footer v-if="onCancel || onConfirm" class="modal-footer">
    <Columns space="6">
      <Column v-if="onCancel">
        <Button
          :disabled="isCancelDisabled"
          :text="cancelText"
          variant="secondary"
          @click.native="onCancel"
        />
      </Column>
      <Column v-if="onConfirm">
        <Button
          :color="confirmColor"
          :disabled="isConfirmDisabled"
          :isLoading="isConfirmLoading"
          :text="confirmText"
          @click.native="onConfirm"
        />
      </Column>
    </Columns>
  </footer>
</template>

<script>
import Button from '../Button/index'
import Column from '../Column/index'
import Columns from '../Columns/index'

export default {
  components: {
    Button,
    Column,
    Columns,
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
