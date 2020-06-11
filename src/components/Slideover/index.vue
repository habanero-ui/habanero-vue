<template>
  <div
    class="slideover"
    :class="{ 'slideover--is-open': isOpen }"
    @click.self="handleBackgroundClick"
  >
    <div class="slideover__panel">
      <div class="slideover__content">
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
    handleBackgroundClick() {
      this.$emit('isOpenChange', false)
    },
  },
}
</script>

<style scoped>
.slideover {
  @apply absolute inset-0 z-50 min-h-screen w-full bg-black-half overflow-hidden pointer-events-none opacity-0;
  top: 0;
  transition: opacity 300ms ease-in-out;
  will-change: transform;
}
.slideover__panel {
  @apply absolute right-0 flex flex-col max-w-xl w-full h-screen;
  transform: translateX(100%);
  transition: transform 300ms ease-in-out;
  will-change: transform;
}
.slideover__content {
  @apply bg-white flex flex-col flex-1;
}
.slideover--is-open {
  @apply pointer-events-auto opacity-100;
}
.slideover--is-open .slideover__panel {
  transform: translateX(0);
}
</style>
