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
    <div class="relative flex items-center w-full">
      <Box class="absolute" marginLeft="4.25">
        <Icon v-if="iconName" :name="iconName" />
      </Box>
      <input
        :id="inputId"
        class="text-input__input"
        :disabled="disabled"
        :value="value"
        v-bind="$attrs"
        @input="handleInputInput"
        v-on="$listeners"
      />
    </div>
  </FormGroup>
</template>

<script>
import Box from '../Box/index'
import FormGroup from '../FormGroup/index'
import Icon from '../Icon/index'

export default {
  components: {
    Box,
    FormGroup,
    Icon,
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
    iconName: {
      default: undefined,
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
    onValueChange: {
      default: undefined,
      type: Function,
    },
    value: {
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
          'text-input--has-icon': this.iconName,
        },
      ]
    },

    inputId() {
      return this.id || this.label.replace(/ /g, '') || undefined
    },
  },
  methods: {
    handleInputInput({ target }) {
      if (!this.onValueChange) return

      const newValue = target.value

      target.value = this.value ? this.value : ''

      this.onValueChange(newValue)
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
  @apply border border-black px-4 transition-colors duration-300 ease-in-out outline-none w-full;
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
.text-input--has-icon .text-input__input {
  padding-left: 3.25rem;
}
.text-input--has-icon .text-input__input:not([disabled]):hover {
  padding-left: 3.1875rem;
}
.text-input--has-icon .text-input__input:focus {
  padding-left: 3.1875rem;
}
</style>
