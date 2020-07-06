<template>
  <hr :class="classes" />
</template>

<script>
import includes from 'lodash/includes'

export default {
  props: {
    thickness: {
      default: 'regular',
      type: String,
      validator: getIsThicknessValid,
    },
  },
  computed: {
    classes() {
      return ['divider', `divider--thickness-${this.thickness}`]
    },
  },
}

function getIsThicknessValid(value) {
  const isValid = includes(['thin', 'regular'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Divider: The "thickness" prop must be one of the following:',
      String(['thin', 'regular']),
    )
  }

  return isValid
}
</script>

<style scoped>
.divider {
  @apply bg-border border-none;
}

.divider--thickness-regular {
  height: 0.125rem;
}

.divider--thickness-thin {
  @apply h-px;
}
</style>
