<template>
  <div
    class="slideover"
    :class="{ 'slideover--is-open': isOpen }"
    @click.self="close"
  >
    <div class="slideover__panel">
      <header class="slideover__header">
        <Button
          iconName="chevron-left"
          iconSide="left"
          text="Back"
          @click.native="close"
        />
        <Button
          v-if="hasOpenInNewWindowListener"
          iconName="new-window"
          iconSide="right"
          iconSize="small"
          text="Open in new window"
          @click.native="openInNewWindow"
        />
      </header>
      <div class="slideover__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Button/index'

export default {
  components: {
    Button,
  },
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    hasOpenInNewWindowListener() {
      return this.$listeners && this.$listeners.openInNewWindow
    },
  },
  methods: {
    close() {
      this.isOpen = false
    },
    openInNewWindow(e) {
      this.$emit('openInNewWindow', e)
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
.slideover--is-open {
  @apply pointer-events-auto opacity-100;
}
.slideover--is-open .slideover__panel {
  transform: translateX(0);
}
.slideover__header {
  @apply flex justify-between bg-black;
}
</style>
