<template>
  <progress :class="classes" :max="max" :value="value" />
</template>

<script>
import colors from '../../constants/colors'
import PropValidation from '../../mixins/PropValidation'

export default {
  mixins: [
    PropValidation({
      color: colors,
    }),
  ],
  props: {
    color: {
      default: 'none',
      type: String,
    },
    max: {
      default: 100,
      type: Number,
    },
    value: {
      default: 0,
      type: Number,
    },
  },
  computed: {
    classes() {
      return ['progress-bar', `progress-bar--color-${this.color}`]
    },
  },
}
</script>

<style scoped>
.progress-bar {
  @apply block w-full h-2 border-0 bg-transparent overflow-hidden appearance-none;
}
.progress-bar::-webkit-progress-bar {
  @apply bg-transparent;
}
.progress-bar--color-black::-webkit-progress-value {
  @apply bg-black;
}
.progress-bar--color-black::-ms-fill {
  @apply bg-black border-0;
}
.progress-bar--color-blue::-webkit-progress-value {
  @apply bg-blue;
}
.progress-bar--color-blue::-ms-fill {
  @apply bg-blue border-0;
}
.progress-bar--color-border::-webkit-progress-value {
  @apply bg-border;
}
.progress-bar--color-border::-ms-fill {
  @apply bg-border border-0;
}
.progress-bar--color-error::-webkit-progress-value {
  @apply bg-error;
}
.progress-bar--color-error::-ms-fill {
  @apply bg-error border-0;
}
.progress-bar--color-gold::-webkit-progress-value {
  @apply bg-gold;
}
.progress-bar--color-gold::-ms-fill {
  @apply bg-gold border-0;
}
.progress-bar--color-green::-webkit-progress-value {
  @apply bg-green;
}
.progress-bar--color-green::-ms-fill {
  @apply bg-green border-0;
}
.progress-bar--color-info::-webkit-progress-value {
  @apply bg-info;
}
.progress-bar--color-info::-ms-fill {
  @apply bg-info border-0;
}
.progress-bar--color-orange::-webkit-progress-value {
  @apply bg-orange;
}
.progress-bar--color-orange::-ms-fill {
  @apply bg-orange border-0;
}
.progress-bar--color-pink::-webkit-progress-value {
  @apply bg-pink;
}
.progress-bar--color-pink::-ms-fill {
  @apply bg-pink border-0;
}
.progress-bar--color-purple::-webkit-progress-value {
  @apply bg-purple;
}
.progress-bar--color-purple::-ms-fill {
  @apply bg-purple border-0;
}
.progress-bar--color-offwhite::-webkit-progress-value {
  @apply bg-offwhite;
}
.progress-bar--color-offwhite::-ms-fill {
  @apply bg-offwhite border-0;
}
.progress-bar--color-subtle::-webkit-progress-value {
  @apply bg-subtle;
}
.progress-bar--color-subtle::-ms-fill {
  @apply bg-subtle border-0;
}
.progress-bar--color-success::-webkit-progress-value {
  @apply bg-success;
}
.progress-bar--color-success::-ms-fill {
  @apply bg-success border-0;
}
.progress-bar--color-warning::-webkit-progress-value {
  @apply bg-warning;
}
.progress-bar--color-warning::-ms-fill {
  @apply bg-warning border-0;
}
</style>
