<template>
  <div :class="classes" v-html="require(`!./../../icons/${name}.js`)" />
</template>

<script>
import includes from 'lodash/includes'

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
  const isValid = includes(
    ['error', 'info', 'none', 'subtle', 'success', 'warning'],
    value,
  )

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Icon: The "color" prop must be one of the following:',
      String(['error', 'info', 'none', 'subtle', 'success', 'warning']),
    )
  }

  return isValid
}

function getIsSizeValid(value) {
  const isValid = includes(['small', 'medium', 'large'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Icon: The "size" prop must be one of the following:',
      String(['small', 'medium', 'large']),
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
  height: 100%;
  width: 100%;
}
.icon--color-none.icon--color-is-background {
  @apply text-white;
}
.icon--color-error {
  @apply text-error;
}
.icon--color-error.icon--color-is-background {
  @apply text-white;
}
.icon--color-info {
  @apply text-info;
}
.icon--color-info.icon--color-is-background {
  @apply text-white;
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
