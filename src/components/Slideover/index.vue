<template>
  <div class="slideover" :class="{ 'is-active': isOpen }" @click.self="close">
    <div class="slideover-inner">
      <header class="slideover-header">
        <Typography class="test" variant="body-small" @click.native="close">
          <Icon name="chevron-left" class="ml-2 mr-1" />
          Back
        </Typography>
        <Typography
          v-if="hasOpenInNewWindowListener"
          class="test"
          variant="body-small"
          @click.native="openInNewWindow"
        >
          Open in new window
          <Icon name="new-window" size="small" class="mx-2" />
        </Typography>
      </header>
      <div class="slideover-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../Icon/index'
import Typography from '../Typography/index'

export default {
  components: {
    Icon,
    Typography,
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
.test {
  @apply h-10 flex items-center text-white cursor-pointer;
}
.slideover {
  @apply absolute inset-0 z-50 min-h-screen w-full bg-black-half overflow-hidden pointer-events-none opacity-0;
  top: 0;
  transition: opacity 300ms ease-in-out;
  will-change: transform;
}
.slideover-inner {
  @apply absolute right-0 flex flex-col max-w-xl w-full h-screen;
  transform: translateX(100%);
  transition: transform 300ms ease-in-out;
  will-change: transform;
}
.slideover.is-active {
  @apply pointer-events-auto opacity-100;
}
.slideover.is-active .slideover-inner {
  transform: translateX(0);
}
.slideover-header {
  @apply flex justify-between bg-black;
}
.slideover-container {
  @apply flex flex-col flex-grow bg-white;
}
</style>
