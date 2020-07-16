<template>
  <Typography
    class="text-link"
    :color="color"
    :component="component"
    variant="label-large"
  >
    <span class="text-link__text"><slot /></span>
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
  created() {
    // eslint-disable-next-line
    console.warn(
      'The TextLink component is deprecated and will be removed in version 2.0.0. Please use the Button with variant="text" instead. ',
    )
  },
}
</script>

<style scoped>
.text-link {
  @apply cursor-pointer;
}
.text-link__text {
  @apply relative block p-2 -m-2;
}
.text-link__text::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: black;
  border-radius: 0.5rem;
  content: '';
}
.text-link__text:hover {
  @apply underline;
}
.text-link__text:active::after {
  opacity: 0.25;
}
.text-link__text:focus {
  @apply underline;
}
</style>
