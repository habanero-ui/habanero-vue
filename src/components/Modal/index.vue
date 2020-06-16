<template>
  <div
    class="modal"
    :class="{ 'modal--is-open': isOpen }"
    @click.self="handleBackgroundClick"
  >
    <div class="modal__window">
      <slot />
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
    onIsOpenChange: {
      default: () => {},
      type: Function,
    },
  },
  methods: {
    handleBackgroundClick() {
      this.onIsOpenChange(false)
    },
  },
}
</script>

<style scoped>
.modal {
  @apply absolute inset-0 top-0 flex items-center justify-center w-full min-h-screen overflow-hidden opacity-0 pointer-events-none bg-black-half;
  transition: opacity 250ms ease;
}
.modal__window {
  @apply p-4 rounded bg-white flex flex-col w-11/12 mx-auto shadow-lg z-50 overflow-y-auto;
}
.modal--is-open {
  @apply pointer-events-auto opacity-100;
}
</style>
