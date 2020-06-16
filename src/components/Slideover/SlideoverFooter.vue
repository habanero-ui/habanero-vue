<template>
  <footer v-if="onCancel || onConfirm" class="slideover-footer">
    <Stack class="px-6" direction="row" space="6">
      <Button
        v-if="onCancel"
        variant="secondary"
        :text="cancelText"
        @click.native="onCancel"
      />
      <Button v-if="onConfirm" :text="confirmText" @click.native="onConfirm" />
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
.slideover-footer {
  @apply flex flex-none mt-auto items-center justify-end bg-grey-100;
  height: 5.5rem;
}
</style>
