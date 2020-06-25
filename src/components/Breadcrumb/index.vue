<template>
  <li :class="classes">
    <Typography variant="label-large">{{ crumb }}</Typography>
  </li>
</template>

<script>
import Typography from '../Typography'

export default {
  components: {
    Typography,
  },
  props: {
    crumb: {
      default: '',
      type: String,
    },
  },
  computed: {
    classes() {
      return ['breadcrumb']
    },
  },
}
</script>

<style scoped>
.breadcrumb {
  @apply flex items-center overflow-hidden font-semibold text-grey-500 cursor-pointer;
}
.breadcrumb::after {
  @apply inline-block mx-4 rounded-full bg-grey-300;
  height: 0.375rem;
  width: 0.375rem;
  content: '';
}
</style>
