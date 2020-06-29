<template>
  <div :class="classes">
    <Stack space="2">
      <Stack v-if="label || helperText" space="1">
        <Typography v-if="label" component="label" variant="label-large">
          {{ label }}
        </Typography>
        <Typography v-if="helperText" color="subtle" variant="label-small">
          {{ helperText }}
        </Typography>
      </Stack>
      <div class="flex items-center">
        <select
          class="select__input"
          :disabled="disabled"
          :value="value"
          v-bind="$attrs"
          @change="handleInputChange"
          v-on="$listeners"
        >
          <option v-if="placeholder" disabled selected hidden value="">
            {{ placeholder }}
          </option>
          <slot />
        </select>
        <Icon class="z-10 select__chevron" name="chevron-down" />
      </div>
      <Typography v-if="error" color="error" variant="body-small">
        {{ error }}
      </Typography>
    </Stack>
  </div>
</template>

<script>
import filter from 'lodash/filter'
import get from 'lodash/get'
import Icon from '../Icon'
import Stack from '../Stack'
import Typography from '../Typography'

export default {
  components: { Icon, Stack, Typography },
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
    label: {
      default: '',
      type: String,
    },
    onValueChange: {
      default: undefined,
      type: Function,
    },
    placeholder: {
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
      return [
        'select',
        {
          'select--disabled': this.disabled,
          'select--error': this.error,
          'select--placeholder-visible':
            this.placeholder && !this.value && this.value !== 0,
        },
      ]
    },
  },
  methods: {
    getOptionValueByIndex(index) {
      const optionElements = filter(
        this.$slots.default,
        (vnode) => vnode.tag === 'option',
      )
      return (
        get(optionElements, `[${index}].data.domProps.value`) ||
        get(optionElements, `[${index}].data.attrs.value`)
      )
    },

    handleInputChange({ target }) {
      if (!this.onValueChange) return

      const optionValue = this.getOptionValueByIndex(
        this.placeholder ? target.selectedIndex - 1 : target.selectedIndex,
      )

      target.value = this.value || this.value === 0 ? this.value : ''

      this.onValueChange(optionValue)
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
  @apply pl-4 pr-10 w-full border border-black rounded-md text-black cursor-pointer;
  height: 2.75rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: border-color 300ms ease-in-out;
}
.select__input:not([disabled]):hover {
  @apply border-2;
  padding-left: 15px;
  padding-right: 39px;
}
.select__input::-ms-expand {
  display: none;
}
.select__input:focus {
  @apply border-2 border-info outline-none;
  padding-left: 15px;
  padding-right: 39px;
}
.select__input > .selected {
  @apply flex-1;
}
.select--error .select__input {
  @apply border-error;
}
.select--placeholder-visible .select__input {
  @apply text-subtle;
}
.select__chevron {
  @apply pointer-events-none;
  margin-left: -2.25rem;
}
</style>
