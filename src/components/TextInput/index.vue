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
      <Box
        class="absolute"
        :class="{ 'right-0': iconSide === 'right' }"
        :marginLeft="iconMarginLeft"
        :marginRight="iconMarginRight"
      >
        <Icon
          v-if="iconName"
          :class="{ 'cursor-pointer': !!onIconClick }"
          :name="iconName"
          :size="adjustedIconSize"
          @click.native="onIconClick"
        />
      </Box>
      <input
        :id="inputId"
        ref="input"
        class="text-input__input"
        :disabled="disabled"
        :type="type"
        :value="value"
        v-bind="$attrs"
        @input="handleInputInput"
        v-on="$listeners"
      />
    </div>
  </FormGroup>
</template>

<script>
import iconSides from '../../constants/iconSides'
import textInputTypes from '../../constants/textInputTypes'
import PropValidation from '../../mixins/PropValidation'
import Box from '../Box/index'
import FormGroup from '../FormGroup/index'
import Icon from '../Icon/index'

export default {
  components: {
    Box,
    FormGroup,
    Icon,
  },
  mixins: [
    PropValidation({
      iconSide: iconSides,
      size: ['small', 'medium'],
      type: textInputTypes,
    }),
  ],
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
    iconSide: {
      default: 'left',
      type: String,
    },
    iconSize: {
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
    onIconClick: {
      default: undefined,
      type: Function,
    },
    onValueChange: {
      default: undefined,
      type: Function,
    },
    size: {
      default: 'medium',
      type: String,
    },
    type: {
      default: 'text',
      type: String,
    },
    value: {
      default: '',
      type: [Number, String],
    },
  },
  computed: {
    adjustedIconSize() {
      if (this.iconSize) {
        return this.iconSize
      }

      return this.size === 'small' ? 'small' : 'medium'
    },

    classes() {
      return [
        'text-input',
        {
          'text-input--disabled': this.disabled,
          'text-input--error': this.error,
          'text-input--has-icon': this.iconName,
        },
        `text-input--icon-side-${this.iconSide}`,
        `text-input--size-${this.size}`,
      ]
    },

    iconMarginLeft() {
      const spacing = this.size === 'medium' ? 3.75 : 2

      return this.iconSide === 'left' ? spacing : undefined
    },

    iconMarginRight() {
      const spacing = this.size === 'medium' ? 3.75 : 2

      return this.iconSide === 'right' ? spacing : undefined
    },

    inputId() {
      return this.id || this.label.replace(/ /g, '') || undefined
    },
  },
  methods: {
    handleInputInput({ target }) {
      if (!this.onValueChange) return

      this.onValueChange(target.value)
    },
  },
}
</script>

<style scoped>
.text-input {
  @apply w-full;
}
.text-input--disabled {
  @apply cursor-not-allowed select-none opacity-50;
}
.text-input--disabled * {
  @apply cursor-not-allowed select-none;
}
.text-input__input {
  @apply bg-transparent border border-black transition-colors duration-300 ease-in-out outline-none w-full;
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
.text-input__input::-moz-placeholder {
  @apply text-subtle;
  opacity: 1;
}
.text-input__input:-ms-input-placeholder {
  @apply text-subtle;
}
.text-input__input::-webkit-input-placeholder {
  @apply text-subtle;
}
.text-input--size-small .text-input__input {
  @apply px-2 rounded-none text-xs;
  height: 2rem;
}
.text-input--size-small .text-input__input:not([disabled]):hover {
  padding-left: 7px;
  padding-right: 7px;
}
.text-input--size-small .text-input__input:focus {
  padding-left: 7px;
  padding-right: 7px;
}
.text-input--size-small.text-input--has-icon.text-input--icon-side-left
  .text-input__input {
  padding-left: 2rem;
}
.text-input--size-small.text-input--has-icon.text-input--icon-side-left
  .text-input__input:not([disabled]):hover {
  padding-left: 1.9375rem;
}
.text-input--size-small.text-input--has-icon.text-input--icon-side-left
  .text-input__input:focus {
  padding-left: 1.9375rem;
}
.text-input--size-small.text-input--has-icon.text-input--icon-side-right
  .text-input__input {
  padding-right: 2rem;
}
.text-input--size-small.text-input--has-icon.text-input--icon-side-right
  .text-input__input:not([disabled]):hover {
  padding-right: 1.9375rem;
}
.text-input--size-small.text-input--has-icon.text-input--icon-side-right
  .text-input__input:focus {
  padding-right: 1.9375rem;
}
.text-input--size-medium .text-input__input {
  @apply px-4;
  border-radius: 0.3125rem;
  height: 2.75rem;
}
.text-input--size-medium .text-input__input:not([disabled]):hover {
  padding-left: 15px;
  padding-right: 15px;
}
.text-input--size-medium .text-input__input:focus {
  padding-left: 15px;
  padding-right: 15px;
}
.text-input--size-medium.text-input--has-icon.text-input--icon-side-left
  .text-input__input {
  padding-left: 3.25rem;
}
.text-input--size-medium.text-input--has-icon.text-input--icon-side-left
  .text-input__input:not([disabled]):hover {
  padding-left: 3.1875rem;
}
.text-input--size-medium.text-input--has-icon.text-input--icon-side-left
  .text-input__input:focus {
  padding-left: 3.1875rem;
}
.text-input--size-medium.text-input--has-icon.text-input--icon-side-right
  .text-input__input {
  padding-right: 3.25rem;
}
.text-input--size-medium.text-input--has-icon.text-input--icon-side-right
  .text-input__input:not([disabled]):hover {
  padding-right: 3.1875rem;
}
.text-input--size-medium.text-input--has-icon.text-input--icon-side-right
  .text-input__input:focus {
  padding-right: 3.1875rem;
}
.text-input--error .text-input__input {
  @apply border-error;
}
</style>
