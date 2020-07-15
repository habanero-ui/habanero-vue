<template>
  <Box
    v-if="onCancel || onConfirm || onDestroy"
    backgroundColor="offwhite"
    component="footer"
    padding="gutter"
  >
    <Columns space="4">
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
  </Box>
</template>

<script>
import Box from '../Box/index'
import Button from '../Button/index'
import Column from '../Column/index'
import Columns from '../Columns/index'

export default {
  components: {
    Box,
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
