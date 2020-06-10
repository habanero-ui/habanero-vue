<template>
  <div class="slideover" :class="{ 'is-active': isOpen }" @click.self="close">
    <div class="slideover-inner">
      <div class="slideover-header">
        <Button
          iconName="chevron-left"
          iconSide="left"
          text="Back"
          @click.native="close"
        />
        <Button
          iconName="new-window"
          iconSide="right"
          iconSize="small"
          text="Open in new window"
        />
      </div>
      <div class="slideover-container">
        <div>
          <!-- <component :is="child" v-bind="childprops"></component> -->
        </div>
        <!-- <LoadingOverlay v-if="enableLoader" class="is-slideover" /> -->
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
      default: true,
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.isOpen = false
    },
  },
}
</script>

<style scoped>
.slideover {
  @apply fixed inset-0 z-50 min-h-screen w-full bg-black-half overflow-hidden pointer-events-none opacity-0;
  top: 0;
  transition: opacity 300ms ease-in-out;
  will-change: transform;
}
.slideover-inner {
  @apply fixed right-0 flex flex-col max-w-xl w-full h-screen;
  transform: translateX(100%);
  transition: transform 300ms ease-in-out;
  will-change: transform;
}
.slideover.is-active {
  @apply pointer-events-auto opacity-100;
}
.slideover .slideover-inner {
  transform: translateX(0);
}
.slideover-header {
  @apply flex justify-between bg-black;
}
.slideover-container {
  @apply relative flex-grow py-8 px-8 w-full bg-white h-full overflow-auto;
}
</style>
