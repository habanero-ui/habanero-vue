<template>
  <Drawer :isOpen="isOpen" :onIsOpenChange="onIsOpenChange">
    <SlideoverHeader
      :backText="backText"
      :openInNewWindowText="openInNewWindowText"
      :onBack="onIsOpenChange"
      :onOpenInNewWindow="onOpenInNewWindow"
    />
    <slot />
    <SlideoverFooter
      :cancelText="cancelText"
      :saveText="saveText"
      :onCancel="onCancel"
      :onSave="onSave"
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
    isOpen: {
      default: false,
      type: Boolean,
    },
    onCancel: {
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
    onSave: {
      default: undefined,
      type: Function,
    },
    openInNewWindowText: {
      default: 'Open in new window',
      type: String,
    },
    saveText: {
      default: 'Save',
      type: String,
    },
  },
}
</script>
