<template>
  <Typography v-if="name" variant="body-extra-small">
    <div :class="classes">
      <div>{{ name }}</div>
      <div>#{{ hex }}</div>
    </div>
  </Typography>
</template>

<script>
import Typography from '../Typography/index'

export default {
  props: {
    hex: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  components: {
    Typography,
  },
  computed: {
    classes() {
      return ['swatch', `swatch--color-${this.name}`]
    },
  },
}
</script>

<style scoped>
.swatch {
  @apply flex items-center capitalize justify-between p-4 h-12;
}

.swatch--color-white {
  @apply bg-white text-black;
}

.swatch--color-black {
  @apply bg-black text-white;
}

.swatch--color-grey-200 {
  @apply bg-grey-200 text-black;
}
</style>
