<template>
  <footer class="slideover-footer">
    <Button
      class="slideover-footer__button"
      variant="secondary"
      :text="cancelText"
      @click.native="handleCancelClick"
    />
    <Button
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
  methods: {
    handleCancelClick() {
      this.$emit('cancel')
    },
    handleSaveClick() {
      this.$emit('save')
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
