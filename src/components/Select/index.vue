<template>
  <div :class="classes">
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
        <div class="z-10 flex items-center h-10 -ml-8">
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
    classes() {
      return ['select', { 'select--disabled': this.isDisabled }]
    },
    isDisabled() {
      return this.$attrs.disabled
    },
    listeners() {
      const { input, ...listeners } = this.$listeners
      return listeners
    },
    selectClasses() {
      return ['select__input', { 'select__input--has-error': this.error }]
    },
  },
}
</script>

<style scoped>
.select--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.select--disabled * {
  cursor: not-allowed;
}
.select__input {
  @apply relative px-4 w-full border border-black rounded-md text-black cursor-pointer transition-colors duration-300 ease-in-out flex items-center;
  height: 2.75rem;
}
.select__input {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
.select__input::-ms-expand {
  display: none;
}
.select__input:focus {
  @apply border-info outline-none;
}
.select__input > .selected {
  @apply flex-1;
}
.select__input--has-error {
  @apply border-error;
}
</style>
