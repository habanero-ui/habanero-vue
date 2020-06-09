<template>
  <div :class="classes" />
</template>

<script>
import includes from 'lodash/includes'
import colors from '../../constants/colors'

export default {
  props: {
    color: {
      default: 'none',
      type: String,
      validator: getIsColorValid,
    },
    colorIsBackground: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'medium',
      type: String,
      validator: getIsSizeValid,
    },
  },
  computed: {
    classes() {
      return [
        'loading-indicator',
        {
          'loading-indicator--color-is-background': this.colorIsBackground,
        },
        `loading-indicator--color-${this.color}`,
        `loading-indicator--size-${this.size}`,
      ]
    },
  },
}

function getIsColorValid(value) {
  const isValid = includes(colors, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'LoadingIndicator: The "color" prop must be one of the following:',
      String(colors),
    )
  }

  return isValid
}

function getIsSizeValid(value) {
  const isValid = includes(['small', 'medium', 'large'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'LoadingIndicator: The "size" prop must be one of the following:',
      String(['small', 'medium', 'large']),
    )
  }

  return isValid
}
</script>

<style>
.loading-indicator {
  @apply relative pointer-events-none transition-opacity duration-300;
  animation-delay: 0.2s;
  animation: rotateButtonSpinner 1.5s linear infinite;
  /* border-top-color: theme('colors.grey-500'); */
}

.loading-indicator::before {
  @apply absolute inset-0 border-4 border-transparent rounded-full;
  content: '';
  opacity: 0.3;
}
.loading-indicator::after {
  @apply absolute inset-0 border-4 border-transparent rounded-full z-10;
  content: '';
  opacity: 0.7;
}
.loading-indicator--color-blue::before {
  @apply border-blue;
}
.loading-indicator--color-blue::after {
  border-top-color: theme('colors.blue');
}
.loading-indicator--color-blue.loading-indicator--color-is-background::before {
  @apply border-black;
}
.loading-indicator--color-blue.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.black');
}
.loading-indicator--color-error::before {
  @apply border-error;
}
.loading-indicator--color-error::after {
  border-top-color: theme('colors.error');
}
.loading-indicator--color-error.loading-indicator--color-is-background::before {
  @apply border-white;
}
.loading-indicator--color-error.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.white');
}
.loading-indicator--color-gold::before {
  @apply border-gold;
}
.loading-indicator--color-gold::after {
  border-top-color: theme('colors.gold');
}
.loading-indicator--color-gold.loading-indicator--color-is-background::before {
  @apply border-white;
}
.loading-indicator--color-gold.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.white');
}
.loading-indicator--color-green::before {
  @apply border-green;
}
.loading-indicator--color-green::after {
  border-top-color: theme('colors.green');
}
.loading-indicator--color-green.loading-indicator--color-is-background::before {
  @apply border-black;
}
.loading-indicator--color-green.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.black');
}
.loading-indicator--color-info::before {
  @apply border-info;
}
.loading-indicator--color-info::after {
  border-top-color: theme('colors.info');
}
.loading-indicator--color-info.loading-indicator--color-is-background::before {
  @apply border-white;
}
.loading-indicator--color-info.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.white');
}
.loading-indicator--color-none::before {
  @apply border-black;
}
.loading-indicator--color-none::after {
  border-top-color: theme('colors.black');
}
.loading-indicator--color-none.loading-indicator--color-is-background::before {
  @apply border-white;
}
.loading-indicator--color-none.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.white');
}
.loading-indicator--color-orange::before {
  @apply border-orange;
}
.loading-indicator--color-orange::after {
  border-top-color: theme('colors.orange');
}
.loading-indicator--color-orange.loading-indicator--color-is-background::before {
  @apply border-black;
}
.loading-indicator--color-orange.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.black');
}
.loading-indicator--color-pink::before {
  @apply border-pink;
}
.loading-indicator--color-pink::after {
  border-top-color: theme('colors.pink');
}
.loading-indicator--color-pink.loading-indicator--color-is-background::before {
  @apply border-black;
}
.loading-indicator--color-pink.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.black');
}
.loading-indicator--color-purple::before {
  @apply border-purple;
}
.loading-indicator--color-purple::after {
  border-top-color: theme('colors.purple');
}
.loading-indicator--color-purple.loading-indicator--color-is-background::before {
  @apply border-black;
}
.loading-indicator--color-purple.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.black');
}
.loading-indicator--color-subtle::before {
  @apply border-subtle;
}
.loading-indicator--color-subtle::after {
  border-top-color: theme('colors.subtle');
}
.loading-indicator--color-subtle.loading-indicator--color-is-background::before {
  @apply border-white;
}
.loading-indicator--color-subtle.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.white');
}
.loading-indicator--color-success::before {
  @apply border-success;
}
.loading-indicator--color-success::after {
  border-top-color: theme('colors.success');
}
.loading-indicator--color-success.loading-indicator--color-is-background::before {
  @apply border-white;
}
.loading-indicator--color-success.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.white');
}
.loading-indicator--color-warning::before {
  @apply border-warning;
}
.loading-indicator--color-warning::after {
  border-top-color: theme('colors.warning');
}
.loading-indicator--color-warning.loading-indicator--color-is-background::before {
  @apply border-black;
}
.loading-indicator--color-warning.loading-indicator--color-is-background::after {
  border-top-color: theme('colors.black');
}
.loading-indicator--size-small {
  @apply w-6 h-6;
}
.loading-indicator--size-medium {
  @apply w-8 h-8;
}
.loading-indicator--size-large {
  @apply w-10 h-10;
}
@keyframes rotateButtonSpinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>
