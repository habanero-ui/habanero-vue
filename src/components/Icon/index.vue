<template>
  <div :class="classes" v-html="require(`!./../../icons/${name}.js`)" />
</template>

<script>
import includes from 'lodash/includes'
import colors from '../../constants/colors'

export default {
  props: {
    color: {
      default: 'none',
      validator: getIsColorValid,
    },
    colorIsBackground: {
      default: false,
      type: Boolean,
    },
    name: {
      default: null,
      type: String,
    },
    size: {
      default: 'medium',
      type: String,
      validator: getIsSizeValid,
    },
  },
  computed: {
    classes() {
      return [
        'icon',
        {
          'icon--color-is-background': this.colorIsBackground,
        },
        `icon--color-${this.color}`,
        `icon--size-${this.size}`,
      ]
    },
  },
}

function getIsColorValid(value) {
  const isValid = includes(colors, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Icon: The "color" prop must be one of the following:',
      String(colors),
    )
  }

  return isValid
}

function getIsSizeValid(value) {
  const isValid = includes(['auto', 'small', 'medium', 'large'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Icon: The "size" prop must be one of the following:',
      String(['auto', 'small', 'medium', 'large']),
    )
  }

  return isValid
}
</script>

<style scoped>
.icon {
  @apply flex-none fill-current overflow-hidden;
}
.icon > svg {
  @apply h-full w-full;
}
.icon--color-none.icon--color-is-background {
  @apply text-white;
}
.icon--color-blue {
  @apply text-blue;
}
.icon--color-blue.icon--color-is-background {
  @apply text-black;
}
.icon--color-border {
  @apply text-border;
}
.icon--color-border.icon--color-is-background {
  @apply text-black;
}
.icon--color-error {
  @apply text-error;
}
.icon--color-error.icon--color-is-background {
  @apply text-white;
}
.icon--color-gold {
  @apply text-gold;
}
.icon--color-gold.icon--color-is-background {
  @apply text-white;
}
.icon--color-green {
  @apply text-green;
}
.icon--color-green.icon--color-is-background {
  @apply text-black;
}
.icon--color-info {
  @apply text-info;
}
.icon--color-info.icon--color-is-background {
  @apply text-white;
}
.icon--color-orange {
  @apply text-orange;
}
.icon--color-orange.icon--color-is-background {
  @apply text-black;
}
.icon--color-pink {
  @apply text-pink;
}
.icon--color-pink.icon--color-is-background {
  @apply text-black;
}
.icon--color-purple {
  @apply text-purple;
}
.icon--color-purple.icon--color-is-background {
  @apply text-black;
}
.icon--color-offwhite {
  @apply text-offwhite;
}
.icon--color-offwhite.icon--color-is-background {
  @apply text-black;
}
.icon--color-subtle {
  @apply text-subtle;
}
.icon--color-subtle.icon--color-is-background {
  @apply text-white;
}
.icon--color-success {
  @apply text-success;
}
.icon--color-success.icon--color-is-background {
  @apply text-white;
}
.icon--color-warning {
  @apply text-warning;
}
.icon--color-warning.icon--color-is-background {
  @apply text-black;
}
.icon--size-auto {
  @apply w-full h-full;
}
.icon--size-large {
  @apply w-8 h-8;
}
.icon--size-medium {
  @apply w-6 h-6;
}
.icon--size-small {
  @apply w-4 h-4;
}
</style>
