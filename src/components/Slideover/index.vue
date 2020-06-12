<template>
  <Drawer
    class="slideover"
    :isOpen="isOpen"
    @isOpenChange="handleBackgroundClick"
  >
    <SlideoverHeader
      class="slideover__header"
      :backText="backText"
      :openInNewWindowText="openInNewWindowText"
      @back="handleBackClick"
      @openInNewWindow="handleOpenInNewWindowClick"
    />
    <div class="slideover__content">
      <slot />
    </div>
    <SlideoverFooter
      class="slideover__footer"
      :cancelText="cancelText"
      :saveText="saveText"
      @cancel="handleCancelClick"
      @save="handleSaveClick"
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
    openInNewWindowText: {
      default: 'Open in new window',
      type: String,
    },
    saveText: {
      default: 'Save',
      type: String,
    },
  },
  methods: {
    handleBackClick() {
      this.$emit('isOpenChange', false)
    },
    handleBackgroundClick() {
      this.$emit('isOpenChange', false)
    },
    handleCancelClick() {
      this.$emit('isOpenChange', false)
    },
    handleOpenInNewWindowClick(e) {
      this.$emit('openInNewWindow', e)
    },
    handleSaveClick() {
      this.$emit('save', {})
    },
  },
}
</script>

<style scoped>
.slideover {
  @apply flex;
}
.slideover__header {
}
.slideover__content {
  @apply flex-grow;
}
.slideover__footer {
}
</style>
