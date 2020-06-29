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

      const optionValue = this.getOptionValueByIndex(target.selectedIndex)

      target.value = this.value

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
.select--error .select__input {
  @apply border-error;
}
.select__chevron {
  @apply pointer-events-none;
  margin-left: -2.25rem;
}
</style>
