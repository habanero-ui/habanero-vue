<template>
  <Box
    :class="classes"
    paddingY="xsmall"
    :tabIndex="tabIndex"
    @click.native="handleClick"
    @keyup.native.enter.space="handleKeyUp"
  >
    <input
      class="toggle__input"
      :checked="isChecked"
      :disabled="disabled"
      tabIndex="-1"
      type="radio"
    />
    <Columns>
      <Column width="content">
        <div class="toggle__track">
          <div class="toggle__thumb">
            <Icon class="toggle__check" color="info" name="check" size="auto" />
          </div>
        </div>
      </Column>
      <Column v-if="text">
        <Box
          paddingLeft="small"
          paddingRight="gutter"
          :paddingTop="textPaddingTop"
        >
          <Typography
            class="toggle__text"
            component="label"
            :variant="textVariant"
          >
            {{ text }}
          </Typography>
        </Box>
      </Column>
    </Columns>
  </Box>
</template>

<script>
import includes from 'lodash/includes'
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Column, Columns, Icon, Typography },
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    isChecked: {
      default: false,
      type: Boolean,
    },
    onIsCheckedChange: {
      default: () => {},
      type: Function,
    },
    size: {
      default: 'medium',
      type: String,
      validator: getIsSizeValid,
    },
    text: {
      default: '',
      type: String,
    },
  },
  computed: {
    classes() {
      return [
        'toggle',
        {
          'toggle--disabled': this.disabled,
          'toggle--is-checked': this.isChecked,
        },
        `toggle--size-${this.size}`,
      ]
    },

    tabIndex() {
      return this.disabled ? -1 : 0
    },

    textPaddingTop() {
      return this.size === 'small' ? '0.1875rem' : 'xxsmall'
    },

    textVariant() {
      return this.size === 'small' ? 'body-extra-small' : 'body-large'
    },
  },
  methods: {
    handleClick(e) {
      if (this.disabled) return

      this.onIsCheckedChange(!this.isChecked)
    },

    handleKeyUp() {
      if (this.disabled) return

      this.onIsCheckedChange(!this.isChecked)
    },
  },
}

function getIsSizeValid(value) {
  const isValid = includes(['small', 'medium'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Toggle: The "size" prop must be one of the following:',
      String(['small', 'medium']),
    )
  }

  return isValid
}
</script>

<style scoped>
.toggle {
  @apply relative flex cursor-pointer outline-none -my-2;
}
.toggle--disabled {
  @apply opacity-50 cursor-not-allowed select-none;
}
.toggle__input {
  @apply absolute;
  left: -9999px;
}
.toggle__track {
  @apply relative bg-subtle flex rounded-full p-1 transition-colors duration-150 ease-in-out;
  height: 1.75rem;
  width: 3.5rem;
}
.toggle__track::after {
  @apply absolute inset-0 pointer-events-none transition-colors duration-300 ease-in-out border border-transparent rounded-full;
  margin: -3px;
  content: '';
}
.toggle--is-checked .toggle__track {
  @apply bg-info;
}
.toggle--size-medium .toggle__track {
  height: 1.75rem;
  width: 3.5rem;
}
.toggle--size-small .toggle__track {
  height: 1.25rem;
  width: 2.5rem;
}
.toggle__thumb {
  @apply flex items-center justify-center bg-white rounded-full;
  padding-top: 0.0625rem;
  transform: translateX(0);
  transition: transform 150ms ease-in-out;
}
.toggle--size-medium .toggle__thumb {
  @apply h-5 w-5;
}
.toggle--size-small .toggle__thumb {
  @apply h-3 w-3;
}
.toggle--size-medium.toggle--is-checked .toggle__thumb {
  transform: translateX(1.75rem);
}
.toggle--size-small.toggle--is-checked .toggle__thumb {
  transform: translateX(1.25rem);
}
.toggle__check {
  @apply opacity-0 transition-opacity duration-150 ease-in-out;
}
.toggle--is-checked .toggle__check {
  @apply opacity-100;
}
.toggle__text {
  @apply cursor-pointer;
}
.toggle:hover .toggle__track::after {
  @apply border-grey-300;
}
.toggle:focus:not(.toggle--disabled) .toggle__track::after {
  @apply border-info;
}
.toggle--disabled .toggle__text {
  @apply cursor-not-allowed;
}
</style>
