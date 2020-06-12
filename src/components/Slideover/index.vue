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
      v-on="headerListeners"
    />
    <div class="slideover__content">
      <slot />
    </div>
    <SlideoverFooter
      class="slideover__footer"
      :cancelText="cancelText"
      :saveText="saveText"
      v-on="footerListeners"
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
  computed: {
    footerListeners() {
      if (!this.$listeners) {
        return {}
      }

      return {
        ...(this.$listeners.cancel ? { cancel: this.handleCancelClick } : {}),
        ...(this.$listeners.save ? { save: this.handleSaveClick } : {}),
      }
    },
    hasCancelListener() {
      return this.$listeners && this.$listeners.cancel
    },
    hasOpenInNewWindowListener() {
      return this.$listeners && this.$listeners.openInNewWindow
    },
    hasSaveListener() {
      return this.$listeners && this.$listeners.save
    },
    headerListeners() {
      if (!this.$listeners) {
        return {}
      }

      return {
        ...(this.$listeners.openInNewWindow
          ? { openInNewWindow: this.handleOpenInNewWindowClick }
          : {}),
      }
    },
  },
  methods: {
    handleBackClick() {
      this.$emit('isOpenChange', false)
    },
    handleBackgroundClick() {
      this.$emit('isOpenChange', false)
    },
    handleCancelClick(e) {
      this.$emit('cancel', e)
    },
    handleOpenInNewWindowClick(e) {
      this.$emit('openInNewWindow', e)
    },
    handleSaveClick(e) {
      this.$emit('save', e)
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
