<template>
  <Slideover
    class="slideover-detail"
    :isOpen="true"
    @isOpenChange="handleBackgroundClick"
  >
    <SlideoverHeader
      class="slideover-detail__header"
      :backText="backText"
      :openInNewWindowText="openInNewWindowText"
      @back="handleBackClick"
      @openInNewWindow="handleOpenInNewWindowClick"
    />
    <div class="slideover-detail__content">
      <slot />
    </div>
  </Slideover>
</template>

<script>
import Slideover from './index'
import SlideoverHeader from './SlideoverHeader'

export default {
  components: {
    Slideover,
    SlideoverHeader,
  },
  props: {
    backText: {
      default: 'Back',
      type: String,
    },
    openInNewWindowText: {
      default: 'Open in new window',
      type: String,
    },
    isOpen: {
      default: undefined,
      type: Boolean,
    },
  },
  methods: {
    handleBackClick() {
      this.$emit('isOpenChange', false)
    },
    handleBackgroundClick() {
      this.$emit('isOpenChange', false)
    },
    handleOpenInNewWindowClick(e) {
      this.$emit('openInNewWindow', e)
    },
  },
}
</script>

<style scoped>
.slideover-detail {
  @apply flex;
}
.slideover-detail__header {
}
.slideover-detail__content {
  @apply flex-grow;
}
</style>
