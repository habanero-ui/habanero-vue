<template>
  <footer v-if="onCancel || onConfirm || onDestroy" class="slideover-footer">
    <div class="pl-6">
      <Button
        v-if="onDestroy"
        color="error"
        :text="destroyText"
        @click.native="onDestroy"
      />
    </div>
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
    destroyText: {
      default: 'Destroy',
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
    onDestroy: {
      default: undefined,
      type: Function,
    },
  },
}
</script>

<style scoped>
.slideover-footer {
  @apply flex flex-none mt-auto items-center justify-between bg-grey-100;
  height: 5.5rem;
}
</style>
