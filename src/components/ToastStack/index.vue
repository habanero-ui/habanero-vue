<template>
  <transition-group :class="classes" name="toast-stack__toast" tag="div">
    <Box
      v-for="(toast, index) in orderedToasts"
      :key="toast.id"
      class="toast-stack__toast"
      :marginTop="index === 0 ? '-xsmall' : ''"
      paddingTop="xsmall"
    >
      <Toast
        :id="toast.id"
        :label="toast.label"
        :message="toast.message"
        :onClose="handleToastClose"
      />
    </Box>
  </transition-group>
</template>

<script>
import reverse from 'lodash/reverse'

import toastStackDirections from '../../constants/toastStackDirections'
import PropValidation from '../../mixins/PropValidation'
import Box from '../Box/index'
import Toast from '../Toast/index'

export default {
  components: { Box, Toast },
  mixins: [
    PropValidation({
      direction: toastStackDirections,
    }),
  ],
  props: {
    direction: {
      default: 'down',
      type: String,
    },
    onToastRemove: {
      default: () => {},
      type: Function,
    },
    onToastsChange: {
      default: () => {},
      type: Function,
    },
    toasts: {
      default: () => [],
      type: Array,
    },
  },
  computed: {
    classes() {
      return ['toast-stack', `toast-stack--direction-${this.direction}`]
    },

    orderedToasts() {
      return this.direction === 'up' ? reverse([...this.toasts]) : this.toasts
    },
  },
  methods: {
    handleToastClose(id) {
      this.onToastRemove(id)

      this.onToastsChange(this.toasts.filter((toast) => toast.id !== id))
    },
  },
}
</script>

<style scoped>
.toast-stack__toast {
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
}
.toast-stack__toast.toast-stack__toast-enter,
.toast-stack__toast.toast-stack__toast-leave-active {
  transform: translateY(-1.25rem);
}
.toast-stack--direction-up > .toast-stack__toast.toast-stack__toast-enter,
.toast-stack--direction-up
  > .toast-stack__toast.toast-stack__toast-leave-active {
  transform: translateY(1.25rem);
}

/**
  Transition
 */
.toast-stack__toast-enter-active,
.toast-stack__toast-leave {
  @apply opacity-100;
}
.toast-stack__toast-enter,
.toast-stack__toast-leave-active {
  @apply opacity-0;
}
</style>
