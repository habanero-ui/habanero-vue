<template>
  <FormGroup
    :class="classes"
    component="div"
    :error="error"
    :helperText="helperText"
    :label="label"
    labelComponent="label"
    :labelFor="inputId"
    space="xsmall"
  >
    <input
      :id="inputId"
      class="text-input__input"
      :disabled="disabled"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </FormGroup>
</template>

<script>
import FormGroup from '../FormGroup/index'

export default {
  components: {
    FormGroup,
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
      return [
        'text-input',
        {
          'text-input--disabled': this.disabled,
          'text-input--error': this.error,
        },
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
  @apply cursor-not-allowed select-none opacity-50;
}
.text-input--disabled * {
  @apply cursor-not-allowed select-none;
}
.text-input__input {
  @apply border border-black px-4 transition-colors duration-300 ease-in-out outline-none;
  border-radius: 0.3125rem;
  height: 2.75rem;
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
.text-input--error .text-input__input {
  @apply border-error;
}
</style>
