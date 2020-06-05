<template>
  <div v-html="require(`!./../../icons/${name}.js`)" :class="classes"></div>
</template>

<script>
import includes from 'lodash/includes'

export default {
  props: {
    intent: {
      default: 'none',
      validator: getIsIntentValid,
    },
    intentIsBackground: {
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
          'icon--intent-is-background': this.intentIsBackground,
        },
        `icon--intent-${this.intent}`,
        `icon--size-${this.size}`,
      ]
    },
  },
}

function getIsIntentValid(value) {
  const isValid = includes(
    ['error', 'info', 'none', 'subtle', 'success', 'warning'],
    value,
  )

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Typography: The "intent" prop must be one of the following:',
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
.icon--intent-none.icon--intent-is-background {
  @apply text-white;
}
.icon--intent-error {
  @apply text-error;
}
.icon--intent-error.icon--intent-is-background {
  @apply text-white;
}
.icon--intent-info {
  @apply text-info;
}
.icon--intent-info.icon--intent-is-background {
  @apply text-white;
}
.icon--intent-subtle:not(.icon--intent-is-background) {
  @apply text-subtle;
}
.icon--intent-success {
  @apply text-success;
}
.icon--intent-success.icon--intent-is-background {
  @apply text-white;
}
.icon--intent-warning {
  @apply text-warning;
}
.icon--intent-warning.icon--intent-is-background {
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
