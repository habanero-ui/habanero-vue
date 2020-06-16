<template>
  <div
    class="drawer"
    :class="{ 'drawer--is-open': isOpen }"
    @click.self="handleBackgroundClick"
  >
    <div class="drawer__panel">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    },
    onIsOpenChange: {
      default: undefined,
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
.drawer {
  @apply fixed flex justify-end inset-0 z-50 bg-black-half overflow-hidden pointer-events-none opacity-0;
  transition: opacity 250ms ease;
}
.drawer__panel {
  @apply bg-white flex flex-col w-full;
  max-width: 60rem;
  transform: translateX(100%);
  transition: transform 250ms ease;
}
.drawer--is-open {
  @apply pointer-events-auto opacity-100;
}
.drawer--is-open .drawer__panel {
  transform: translateX(0);
}
</style>
