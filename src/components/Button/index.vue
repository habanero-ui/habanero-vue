<template>
  <button :class="classes" :type="type">
    <Typography class="button__text" v-if="text" variant="button">
      {{ text }}
    </Typography>
    <slot />
  </button>
</template>

<script>
import includes from 'lodash/includes'
import Typography from '../Typography/index'

export default {
  props: {
    appearance: {
      default: 'primary',
      type: String,
      validator: getIsAppearanceValid,
    },
    intent: {
      default: 'none',
      type: String,
      validator: getIsIntentValid,
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
  components: {
    Typography,
  },
  computed: {
    classes() {
      return [
        'button',
        {
          'button--has-text': !!this.text,
        },
        `button--appearance-${this.appearance}`,
        `button--intent-${this.intent}`,
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

function getIsIntentValid(value) {
  const isValid = includes(
    ['error', 'info', 'none', 'success', 'warning'],
    value,
  )

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Button: The "intent" prop must be one of the following:',
      String(['error', 'info', 'none', 'success', 'warning']),
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
.button:hover .button__text {
  @apply underline;
}
.button:hover::after {
  opacity: 0.1;
}
.button:active::after {
  opacity: 0.25;
}
.button--appearance-primary.button--intent-none {
  @apply bg-black border-black text-white;
}
.button--appearance-primary.button--intent-none:focus::before {
  @apply border-black;
}
.button--appearance-primary.button--intent-error {
  @apply bg-error-100 border-error-100 text-white;
}
.button--appearance-primary.button--intent-error:focus::before {
  @apply border-error-100;
}
.button--appearance-primary.button--intent-info {
  @apply bg-info border-info text-white;
}
.button--appearance-primary.button--intent-info:focus::before {
  @apply border-info;
}
.button--appearance-primary.button--intent-success {
  @apply bg-success border-success text-white;
}
.button--appearance-primary.button--intent-success:focus::before {
  @apply border-success;
}
.button--appearance-primary.button--intent-warning {
  @apply bg-warning border-warning;
}
.button--appearance-primary.button--intent-warning:focus::before {
  @apply border-warning;
}

/**
  Appearance - Secondary ---------- 
 */
.button--appearance-secondary.button--intent-none {
  @apply border-black;
}
.button--appearance-secondary.button--intent-none:focus::before {
  @apply border-black;
}
.button--appearance-secondary.button--intent-error {
  @apply border-error-100 text-error-100;
}
.button--appearance-secondary.button--intent-error:focus::before {
  @apply border-error-100;
}
.button--appearance-secondary.button--intent-info {
  @apply border-info text-info;
}
.button--appearance-secondary.button--intent-info:focus::before {
  @apply border-info;
}
.button--appearance-secondary.button--intent-success {
  @apply border-success text-success;
}
.button--appearance-secondary.button--intent-success:focus::before {
  @apply border-success;
}
.button--appearance-secondary.button--intent-warning {
  @apply border-warning text-warning;
}
.button--appearance-secondary.button--intent-warning:focus::before {
  @apply border-warning;
}
.button--appearance-text.button--intent-none:focus::before {
  @apply border-black;
}
.button--appearance-text.button--intent-error {
  @apply text-error-100;
}
.button--appearance-text.button--intent-error:focus::before {
  @apply border-error-100;
}
.button--appearance-text.button--intent-info {
  @apply text-info;
}
.button--appearance-text.button--intent-info:focus::before {
  @apply border-info;
}
.button--appearance-text.button--intent-success {
  @apply text-success;
}
.button--appearance-text.button--intent-success:focus::before {
  @apply border-success;
}
.button--appearance-text.button--intent-warning {
  @apply text-warning;
}
.button--appearance-text.button--intent-warning:focus::before {
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
</style>
