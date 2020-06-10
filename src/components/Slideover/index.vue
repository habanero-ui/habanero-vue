<template>
  <div
    class="slideover"
    :class="{ 'slideover--is-open': isOpen }"
    @click.self="close"
  >
    <div class="slideover__panel">
      <header class="slideover__header">
        <div class="slideover__back-button" @click="handleBackClick">
          <Icon
            :colorIsBackground="true"
            class="slideover__back-icon"
            name="chevron-left"
          />
          <Typography :colorIsBackground="true" @click.native="close">
            Back
          </Typography>
        </div>
        <div class="">
          <Typography
            v-if="hasOpenInNewWindowListener"
            class="test"
            variant="body-small"
            @click.native="openInNewWindow"
          >
            Open in new window
          </Typography>
          <Icon name="new-window" size="small" class="mx-2" />
        </div>
      </header>
      <div class="slideover__content">
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
    handleBackClick() {
      this.$emit('isOpenChange', !this.isOpen)
    },
    handleOpenInNewWindowClick(e) {
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
.slideover__header {
  @apply h-16 flex justify-between bg-black;
}
.slideover__back-button {
  @apply flex items-center px-4;
}
.slideover__back-icon {
  @apply mr-4;
}
.slideover__content {
  @apply flex flex-col flex-1;
}
.slideover--is-open {
  @apply pointer-events-auto opacity-100;
}
.slideover--is-open .slideover__panel {
  transform: translateX(0);
}
</style>
