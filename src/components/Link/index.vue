<template>
  <Typography
    class="link"
    :color="color"
    :component="component"
    variant="label-large"
  >
    <slot />
  </Typography>
</template>

<script>
import Typography from '../Typography'

export default {
  components: {
    Typography,
  },
  props: {
    color: {
      default: 'info',
      type: String,
    },
    component: {
      default: 'a',
      type: String,
    },
  },
}
</script>

<style scoped>
.link {
  @apply relative cursor-pointer p-2 -m-2;
}
.link::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: black;
  border-radius: 0.5rem;
  content: '';
}
.link:hover {
  @apply underline;
}
.link:hover::after {
  opacity: 0.1;
}
.link:active::after {
  opacity: 0.25;
}
</style>
