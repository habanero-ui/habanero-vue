<template>
  <button :class="classes" :type="type">
    <Typography
      v-if="text"
      class="button__text"
      :color="color"
      :colorIsBackground="appearance === 'primary'"
      variant="button"
    >
      {{ text }}
    </Typography>
    <Icon
      v-if="iconName"
      class="button__icon"
      :color="color"
      :colorIsBackground="appearance === 'primary'"
      :name="iconName"
      :size="size"
    />
    <slot />
  </button>
</template>

<script>
import includes from 'lodash/includes'
import Icon from '../Icon/index'
import Typography from '../Typography/index'

export default {
  components: {
    Icon,
    Typography,
  },
  props: {
    appearance: {
      default: 'primary',
      type: String,
      validator: getIsAppearanceValid,
    },
    color: {
      default: 'none',
      type: String,
      validator: getIsColorValid,
    },
    iconName: {
      type: String,
    },
    iconSide: {
      default: 'right',
      validator: getIsIconSideValid,
    },
    size: {
      default: 'medium',
      type: String,
      validator: getIsSizeValid,
    },
    text: {
      type: String,
    },
    type: {
      default: 'button',
      type: String,
    },
  },
  computed: {
    classes() {
      return [
        'button',
        {
          'button--has-text': !!this.text,
          'button--icon-left': this.iconSide === 'left',
        },
        `button--appearance-${this.appearance}`,
        `button--color-${this.color}`,
        `button--size-${this.size}`,
      ]
    },
  },
}

function getIsAppearanceValid(value) {
  const isValid = includes(['primary', 'secondary', 'text'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Button: The "appearance" prop must be one of the following:',
      String(['primary', 'secondary', 'text']),
    )
  }

  return isValid
}

function getIsColorValid(value) {
  const isValid = includes(
    ['error', 'info', 'none', 'subtle', 'success', 'warning'],
    value,
  )

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Button: The "color" prop must be one of the following:',
      String(['error', 'info', 'none', 'subtle', 'success', 'warning']),
    )
  }

  return isValid
}

function getIsIconSideValid(value) {
  const isValid = includes(['left', 'right'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Button: The "iconSide" prop must be one of the following:',
      String(['left', 'right']),
    )
  }

  return isValid
}

function getIsSizeValid(value) {
  const isValid = includes(['small', 'medium'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Button: The "size" prop must be one of the following:',
      String(['small', 'medium']),
    )
  }

  return isValid
}
</script>

<style scoped>
.button {
  @apply relative flex-none flex justify-center items-center rounded-lg border border-transparent outline-none;
}
.button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.button::before {
  @apply absolute inset-0 pointer-events-none transition-colors duration-300 ease-in-out border border-transparent;
  margin: -3px;
  border-radius: 0.625rem;
  content: '';
}
.button::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: #000;
  border-radius: 0.5rem;
  content: '';
}
.button:hover:not([disabled]) .button__text {
  @apply underline;
}
.button:hover:not([disabled])::after {
  opacity: 0.1;
}
.button:active:not([disabled])::after {
  opacity: 0.25;
}
.button--appearance-primary.button--color-none {
  @apply bg-black border-black;
}
.button--appearance-primary.button--color-none:focus::before {
  @apply border-black;
}
.button--appearance-primary.button--color-error {
  @apply bg-error border-error;
}
.button--appearance-primary.button--color-error:focus::before {
  @apply border-error;
}
.button--appearance-primary.button--color-info {
  @apply bg-info border-info;
}
.button--appearance-primary.button--color-info:focus::before {
  @apply border-info;
}
.button--appearance-primary.button--color-subtle {
  @apply bg-subtle border-subtle;
}
.button--appearance-primary.button--color-subtle:focus::before {
  @apply border-subtle;
}
.button--appearance-primary.button--color-success {
  @apply bg-success border-success;
}
.button--appearance-primary.button--color-success:focus::before {
  @apply border-success;
}
.button--appearance-primary.button--color-warning {
  @apply bg-warning border-warning;
}
.button--appearance-primary.button--color-warning:focus::before {
  @apply border-warning;
}

/**
  Appearance - Secondary ---------- 
 */
.button--appearance-secondary.button--color-none {
  @apply border-black;
}
.button--appearance-secondary.button--color-none:focus::before {
  @apply border-black;
}
.button--appearance-secondary.button--color-error {
  @apply border-error;
}
.button--appearance-secondary.button--color-error:focus::before {
  @apply border-error;
}
.button--appearance-secondary.button--color-info {
  @apply border-info;
}
.button--appearance-secondary.button--color-info:focus::before {
  @apply border-info;
}
.button--appearance-secondary.button--color-subtle {
  @apply border-subtle;
}
.button--appearance-secondary.button--color-subtle:focus::before {
  @apply border-subtle;
}
.button--appearance-secondary.button--color-success {
  @apply border-success;
}
.button--appearance-secondary.button--color-success:focus::before {
  @apply border-success;
}
.button--appearance-secondary.button--color-warning {
  @apply border-warning;
}
.button--appearance-secondary.button--color-warning:focus::before {
  @apply border-warning;
}
.button--appearance-text.button--color-none:focus::before {
  @apply border-black;
}
.button--appearance-text.button--color-error:focus::before {
  @apply border-error;
}
.button--appearance-text.button--color-info:focus::before {
  @apply border-info;
}
.button--appearance-text.button--color-subtle:focus::before {
  @apply border-subtle;
}
.button--appearance-text.button--color-success:focus::before {
  @apply border-success;
}
.button--appearance-text.button--color-warning:focus::before {
  @apply border-warning;
}
.button--size-medium {
  height: 2.75rem;
  min-width: 2.75rem;
}
.button--size-small {
  @apply h-8;
  min-width: 2rem;
}
.button--size-medium.button--has-text,
.button--size-small.button--has-text {
  @apply px-6;
  min-width: 8rem;
}
.button--appearance-text.button--size-medium.button--has-text,
.button--appearance-text.button--size-small.button--has-text {
  @apply px-4;
  min-width: 7.5rem;
}
.button__text + .button__icon {
  @apply ml-4 -mr-2;
}
.button--appearance-text > .button__text + .button__icon {
  @apply ml-3 -mr-1;
}
.button--icon-left {
  @apply flex-row-reverse;
}
.button--icon-left > .button__text + .button__icon {
  @apply mr-4 -ml-2;
}
.button--icon-left.button--appearance-text > .button__text + .button__icon {
  @apply mr-3 -ml-1;
}
</style>
