<template>
  <div
    class="slideover"
    :class="{ 'slideover--is-open': isOpen }"
    @click.self="handleBackgroundClick"
  >
    <div class="slideover__panel">
      <header class="slideover__header">
        <SlideoverHeaderButton @click.native="handleBackClick">
          <Icon
            :colorIsBackground="true"
            class="slideover__back-icon"
            name="arrow-left"
            size="small"
          />
          <Typography :colorIsBackground="true">
            Back
          </Typography>
        </SlideoverHeaderButton>
        <SlideoverHeaderButton
          v-if="hasOpenInNewWindowListener"
          @click.native="handleOpenInNewWindowClick"
        >
          <Typography :colorIsBackground="true">
            Open in new window
          </Typography>
          <Icon
            :colorIsBackground="true"
            class="slideover__new-window-icon"
            name="new-window"
            size="small"
          />
        </SlideoverHeaderButton>
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
import SlideoverHeaderButton from './SlideoverHeaderButton'

export default {
  components: {
    Icon,
    SlideoverHeaderButton,
    Typography,
  },
  props: {
    isOpen: {
      default: undefined,
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
      this.$emit('isOpenChange', false)
    },
    handleBackgroundClick() {
      this.$emit('isOpenChange', false)
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
.slideover__back-icon {
  @apply mr-4;
}
.slideover__new-window-icon {
  @apply ml-4;
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
