<template>
  <Drawer
    class="slideover"
    :isOpen="isOpen"
    :onIsOpenChange="onIsOpenChange"
    :width="900"
  >
    <SlideoverHeader
      :backText="backText"
      :openInNewWindowText="openInNewWindowText"
      :onBack="handleBackClick"
      :onOpenInNewWindow="onOpenInNewWindow"
    />
    <div class="slideover__content">
      <slot />
    </div>
    <SlideoverFooter
      :cancelText="cancelText"
      :confirmText="confirmText"
      :destroyText="destroyText"
      :isCancelDisabled="isCancelDisabled"
      :isConfirmDisabled="isConfirmDisabled"
      :isConfirmLoading="isConfirmLoading"
      :onCancel="onCancel"
      :onConfirm="onConfirm"
      :onDestroy="onDestroy"
    />
  </Drawer>
</template>

<script>
import Drawer from '../Drawer/index'
import SlideoverFooter from './SlideoverFooter'
import SlideoverHeader from './SlideoverHeader'

export default {
  components: {
    Drawer,
    SlideoverFooter,
    SlideoverHeader,
  },
  props: {
    backText: {
      default: 'Back',
      type: String,
    },
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
    isOpen: {
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
    onIsOpenChange: {
      default: () => {},
      type: Function,
    },
    onOpenInNewWindow: {
      default: undefined,
      type: Function,
    },
    openInNewWindowText: {
      default: 'Open in new window',
      type: String,
    },
  },
  data: () => ({
    initialBodyOverflowY: 'auto',
  }),
  watch: {
    isOpen() {
      this.updateBodyScrolling()
    },
  },
  created() {
    this.initialBodyOverflowY = document.body.style.overflowY

    this.updateBodyScrolling()
  },
  beforeDestroy() {
    document.body.style.overflowY = this.initialBodyOverflowY
  },
  methods: {
    handleBackClick() {
      this.onIsOpenChange(!this.isOpen)
    },

    updateBodyScrolling() {
      if (this.isOpen) {
        document.body.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = this.initialBodyOverflowY
      }
    },
  },
}
</script>

<style scoped>
.slideover__content {
  @apply flex flex-col flex-1 overflow-y-auto;
}
</style>
