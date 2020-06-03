<template>
  <div v-html="require(`!./../../icons/${name}.svg`)" :class="classes"></div>
</template>

<script>
import includes from 'lodash/includes'

export default {
  props: {
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
      return ['icon', `icon--size-${this.size}`]
    },
  },
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
  @apply flex items-center justify-center overflow-hidden;
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
