<template>
  <div :class="classes">
    <Stack space="2">
      <Stack v-if="label || helperText" space="0.5">
        <Typography v-if="label" component="label" variant="label-large">
          {{ label }}
        </Typography>
        <Typography v-if="helperText" color="subtle" variant="label-small">
          {{ helperText }}
        </Typography>
      </Stack>
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
        <div class="z-10 flex items-center -ml-8">
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
    helperText: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
    value: {
      default: '',
      type: [Number, String],
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
  @apply cursor-not-allowed select-none opacity-50;
}
.select--disabled * {
  @apply cursor-not-allowed select-none;
}
.select--disabled .select__input {
  @apply cursor-not-allowed;
}
.select__input {
  @apply relative px-4 w-full border border-black rounded-md text-black cursor-pointer transition-colors duration-300 ease-in-out flex items-center;
  height: 2.75rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
.select__input:not([disabled]):hover {
  @apply border-2;
  padding-left: 15px;
  padding-right: 15px;
}
.select__input::-ms-expand {
  display: none;
}
.select__input:focus {
  @apply border-2 border-info outline-none;
  padding-left: 15px;
  padding-right: 15px;
}
.select__input > .selected {
  @apply flex-1;
}
.select__input--has-error {
  @apply border-error;
}
</style>
