<template>
  <div :class="classes">
    <Typography variant="label-large">{{ crumb }}</Typography>
  </div>
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
}
</style>
