<template>
  <Slideover
    class="slideover-form"
    :isOpen="true"
    @isOpenChange="handleBackgroundClick"
  >
    <SlideoverHeader
      class="slideover-form__header"
      :backText="backText"
      @back="handleBackClick"
    />
    <div class="slideover-form__content">
      <slot />
    </div>
    <SlideoverFooter
      class="slideover-form__footer"
      :cancelText="cancelText"
      :saveText="saveText"
      @cancel="handleCancelClick"
      @save="handleSaveClick"
    />
  </Slideover>
</template>

<script>
import Slideover from './index'
import SlideoverFooter from './SlideoverFooter'
import SlideoverHeader from './SlideoverHeader'

export default {
  components: {
    Slideover,
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
    saveText: {
      default: 'Save',
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
    handleCancelClick() {
      this.$emit('isOpenChange', false)
    },
    handleSaveClick() {
      this.$emit('save', {})
    },
  },
}
</script>

<style scoped>
.slideover-form {
  @apply flex;
}
.slideover-form__header {
}
.slideover-form__content {
  @apply flex-grow;
}
.slideover-form__footer {
}
</style>
