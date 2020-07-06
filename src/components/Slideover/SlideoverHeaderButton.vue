<template>
  <Box
    class="slideover-header-button"
    component="button"
    padding="gutter"
    type="button"
  >
    <slot />
  </Box>
</template>

<script>
import Box from '../Box/index'

export default {
  components: { Box },
}
</script>

<style scoped>
.slideover-header-button {
  @apply relative flex items-center cursor-pointer outline-none select-none;
}
.slideover-header-button::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out bg-white;
  content: '';
}
.slideover-header-button:hover::after {
  opacity: 0.1;
}
.slideover-header-button:active::after {
  @apply opacity-25;
}
.slideover-header-button:focus {
  box-shadow: 0 0 0 2px white inset;
}
</style>
