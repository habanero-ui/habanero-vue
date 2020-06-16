<template>
  <footer v-if="hasCancelListener || hasSaveListener" class="slideover-footer">
    <Button
      v-if="hasCancelListener"
      class="slideover-footer__button"
      variant="secondary"
      :text="cancelText"
      @click.native="handleCancelClick"
    />
    <Button
      v-if="hasSaveListener"
      class="slideover-footer__button"
      :text="saveText"
      @click.native="handleSaveClick"
    />
  </footer>
</template>

<script>
import Button from '../Button/index'

export default {
  components: {
    Button,
  },
  props: {
    cancelText: {
      default: 'Cancel',
      type: String,
    },
    saveText: {
      default: 'Save',
      type: String,
    },
  },
  computed: {
    hasCancelListener() {
      return this.$listeners && this.$listeners.cancel
    },
    hasSaveListener() {
      return this.$listeners && this.$listeners.save
    },
  },
  methods: {
    handleCancelClick(e) {
      this.$emit('cancel', e)
    },
    handleSaveClick(e) {
      this.$emit('save', e)
    },
  },
}
</script>

<style scoped>
.slideover-footer {
  @apply h-20 flex items-center justify-end bg-grey-100;
}
.slideover-footer__button {
  @apply mr-6;
}
</style>
