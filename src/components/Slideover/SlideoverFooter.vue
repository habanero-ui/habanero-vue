<template>
  <footer v-if="onCancel || onConfirm || onDestroy" class="slideover-footer">
    <Columns space="6">
      <Column v-if="onDestroy" width="content">
        <Button color="error" :text="destroyText" @click.native="onDestroy" />
      </Column>
      <Column />
      <Column v-if="onCancel" width="content">
        <Button
          :disabled="isCancelDisabled"
          :text="cancelText"
          variant="secondary"
          @click.native="onCancel"
        />
      </Column>
      <Column v-if="onConfirm" width="content">
        <Button
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
    confirmText: {
      default: 'Confirm',
      type: String,
    },
    destroyText: {
      default: 'Destroy',
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
    onDestroy: {
      default: undefined,
      type: Function,
    },
  },
}
</script>

<style scoped>
.slideover-footer {
  @apply flex flex-col flex-none p-6 mt-auto bg-grey-100;
}
</style>
