<template>
  <Drawer :isOpen="isOpen" :onIsOpenChange="onIsOpenChange">
    <SlideoverHeader
      :backText="backText"
      :openInNewWindowText="openInNewWindowText"
      :onBack="onIsOpenChange"
      :onOpenInNewWindow="onOpenInNewWindow"
    />
    <div class="flex flex-col flex-1 overflow-y-auto">
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
      default: undefined,
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
}
</script>
