<template>
  <hr :class="classes" />
</template>

<script>
import dividerThicknesses from '../../constants/dividerThicknesses'
import PropValidation from '../../mixins/PropValidation'

export default {
  mixins: [
    PropValidation({
      thickness: dividerThicknesses,
    }),
  ],
  props: {
    thickness: {
      default: 'regular',
      type: String,
    },
  },
  computed: {
    classes() {
      return ['divider', `divider--thickness-${this.thickness}`]
    },
  },
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
