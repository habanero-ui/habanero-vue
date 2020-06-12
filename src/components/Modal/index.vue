<template>
  <div
    class="modal"
    :class="{ 'modal--is-open': isOpen }"
    @click.self="handleCloseClick"
  >
    <div class="modal__panel">
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      default: undefined,
      type: Boolean,
    },
  },
  methods: {
    handleCloseClick() {
      this.$emit('isOpenChange', false)
    },
  },
}
</script>

<style scoped>
.modal {
  @apply absolute inset-0 top-0 flex items-center justify-center w-full min-h-screen overflow-hidden opacity-0 pointer-events-none bg-black-half;
  transition: opacity 300ms ease-in-out;
}
.modal__panel {
  @apply w-11/12 mx-auto shadow-lg z-50 overflow-y-auto;
}
.modal__content {
  @apply p-4 rounded bg-white flex flex-col flex-1;
}
.modal--is-open {
  @apply pointer-events-auto opacity-100;
}
</style>
