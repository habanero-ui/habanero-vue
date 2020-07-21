<template>
  <Box
    backgroundColor="black"
    class="slideover-header-button"
    component="button"
    padding="gutter"
    showInteractionOverlay
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
  @apply flex items-center outline-none select-none;
}
.slideover-header-button:focus {
  box-shadow: 0 0 0 2px white inset;
}
</style>
