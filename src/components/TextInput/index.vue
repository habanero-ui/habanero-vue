<template>
  <Stack :class="classes" space="2">
    <Stack v-if="label || helperText" space="0.5">
      <Typography
        v-if="label"
        component="label"
        :for="inputId"
        variant="label-large"
      >
        {{ label }}
      </Typography>
      <Typography v-if="helperText" color="subtle" variant="label-small">
        {{ helperText }}
      </Typography>
    </Stack>
    <input
      :id="inputId"
      :class="inputClasses"
      :disabled="disabled"
      v-bind="$attrs"
      v-on="$listeners"
    />
    <Typography v-if="error" color="error" variant="body-small">
      {{ error }}
    </Typography>
  </Stack>
</template>

<script>
import Stack from '../Stack'
import Typography from '../Typography'

export default {
  components: {
    Stack,
    Typography,
  },
  inheritAttrs: false,
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    error: {
      default: '',
      type: String,
    },
    helperText: {
      default: '',
      type: String,
    },
    id: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
  },
  computed: {
    classes() {
      return ['text-input', { 'text-input--disabled': this.disabled }]
    },

    inputClasses() {
      return [
        'text-input__input',
        { 'text-input__input--has-error': this.error },
      ]
    },

    inputId() {
      return this.id || this.label.replace(/ /g, '') || undefined
    },
  },
}
</script>

<style scoped>
.text-input--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.text-input--disabled * {
  cursor: not-allowed;
}
.text-input__input {
  @apply border border-black transition-colors duration-300 ease-in-out outline-none;
  border-radius: 0.3125rem;
  height: 2.75rem;
  padding-left: 16px;
  padding-right: 16px;
}
.text-input__input:not([disabled]):hover {
  @apply border-2;
  padding-left: 15px;
  padding-right: 15px;
}
.text-input__input:focus {
  @apply border-2 border-info;
  padding-left: 15px;
  padding-right: 15px;
}
.text-input__input--has-error {
  @apply border-error;
}
</style>
