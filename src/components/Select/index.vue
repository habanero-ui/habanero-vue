<template>
  <div :class="containerClasses">
    <Stack space="2">
      <Typography v-if="label" component="label" variant="label-large">
        {{ label }}
      </Typography>

      <div class="flex">
        <select
          :class="selectClasses"
          :value="value"
          v-bind="$attrs"
          v-on="listeners"
          @input="$emit('input', $event.target.value)"
        >
          <slot />
        </select>

        <div class="flex items-center h-10 z-10 -ml-8">
          <Icon name="chevron-down" />
        </div>
      </div>

      <Typography v-if="error" color="error" variant="body-small">
        {{ error }}
      </Typography>
    </Stack>
  </div>
</template>

<script>
import Icon from '../Icon'
import Stack from '../Stack'
import Typography from '../Typography'

export default {
  components: { Icon, Stack, Typography },
  inheritAttrs: false,

  props: {
    error: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
    name: {
      default: '',
      type: String,
    },
    value: {
      default: '',
    },
  },

  computed: {
    containerClasses() {
      return ['container', { 'container--disabled': this.isDisabled }]
    },
    isDisabled() {
      return this.$attrs.disabled
    },
    listeners() {
      const { input, ...listeners } = this.$listeners
      return listeners
    },
    selectClasses() {
      return ['select', { 'select--has-error': this.error }]
    },
  },
}
</script>

<style scoped>
.container--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.container--disabled * {
  cursor: not-allowed;
}

.select {
  @apply relative px-4 h-10 w-full border border-black rounded-md text-black cursor-pointer transition-colors duration-300 ease-in-out flex items-center;
}

.select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}

.select::-ms-expand {
  display: none;
}

.select:focus {
  @apply border-info outline-none;
}

.select > .selected {
  @apply flex-1;
}

.select--has-error {
  @apply border-error;
}
</style>
