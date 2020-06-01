<template>
  <Typography v-if="name" variant="body-extra-small">
    <div :class="classes">
      <div>{{ name.replace('-', ' ') }}</div>
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

/**
  Color - Primary ---------- 
 */
.swatch--color-gold {
  @apply bg-gold text-white;
}
.swatch--color-beige {
  @apply bg-beige text-black;
}
.swatch--color-dark-beige {
  @apply bg-dark-beige text-black;
}

/**
  Color - Surface ---------- 
 */
.swatch--color-white {
  @apply bg-white text-black;
}
.swatch--color-heavy-black {
  @apply bg-heavy-black text-white;
}
.swatch--color-black {
  @apply bg-black text-white;
}
.swatch--color-grey-500 {
  @apply bg-grey-500 text-white;
}
.swatch--color-grey-400 {
  @apply bg-grey-400 text-black;
}
.swatch--color-grey-300 {
  @apply bg-grey-300 text-black;
}
.swatch--color-grey-200 {
  @apply bg-grey-200 text-black;
}
.swatch--color-grey-100 {
  @apply bg-grey-100 text-black;
}

/**
  Color - Secondary ---------- 
 */
.swatch--color-blue {
  @apply bg-blue text-black;
}
.swatch--color-green {
  @apply bg-green text-black;
}
.swatch--color-orange {
  @apply bg-orange text-black;
}
.swatch--color-pink {
  @apply bg-pink text-black;
}
.swatch--color-purple {
  @apply bg-purple text-white;
}

/**
  Color - Supportive ---------- 
 */
.swatch--color-info {
  @apply bg-info text-white;
}
.swatch--color-success {
  @apply bg-success text-white;
}
.swatch--color-warning {
  @apply bg-warning text-black;
}
.swatch--color-error-300 {
  @apply bg-error-300 text-white;
}
.swatch--color-error-200 {
  @apply bg-error-200 text-white;
}
.swatch--color-error-100 {
  @apply bg-error-100 text-white;
}
</style>
