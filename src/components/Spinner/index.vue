<template>
  <div :class="classes" />
</template>

<script>
import colors from '../../constants/colors'
import PropValidation from '../../mixins/PropValidation'

export default {
  mixins: [
    PropValidation({
      color: colors,
      size: ['small', 'medium', 'large'],
    }),
  ],
  props: {
    color: {
      default: 'black',
      type: String,
    },
    colorIsBackground: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'medium',
      type: String,
    },
  },
  computed: {
    classes() {
      return [
        'spinner',
        {
          'spinner--color-is-background': this.colorIsBackground,
        },
        `spinner--color-${this.color}`,
        `spinner--size-${this.size}`,
      ]
    },
  },
}
</script>

<style scoped>
.spinner {
  @apply relative pointer-events-none transition-opacity duration-300;
  animation-delay: 0.2s;
  animation: rotateButtonSpinner 1.5s linear infinite;
}
.spinner::before {
  @apply absolute inset-0 border-4 border-transparent rounded-full;
  content: '';
  opacity: 0.3;
}
.spinner::after {
  @apply absolute inset-0 border-4 border-transparent rounded-full z-10;
  content: '';
  opacity: 0.7;
}
.spinner--color-none::before {
  @apply border-black;
}
.spinner--color-none::after {
  border-top-color: theme('colors.black');
}
.spinner--color-none.spinner--color-is-background::before {
  @apply border-black;
}
.spinner--color-none.spinner--color-is-background::after {
  border-top-color: theme('colors.black');
}
.spinner--color-black::before {
  @apply border-black;
}
.spinner--color-black::after {
  border-top-color: theme('colors.black');
}
.spinner--color-black.spinner--color-is-background::before {
  @apply border-white;
}
.spinner--color-black.spinner--color-is-background::after {
  border-top-color: theme('colors.white');
}
.spinner--color-blue::before {
  @apply border-blue;
}
.spinner--color-blue::after {
  border-top-color: theme('colors.blue');
}
.spinner--color-blue.spinner--color-is-background::before {
  @apply border-black;
}
.spinner--color-blue.spinner--color-is-background::after {
  border-top-color: theme('colors.black');
}
.spinner--color-border::before {
  @apply border-border;
}
.spinner--color-border::after {
  border-top-color: theme('colors.border');
}
.spinner--color-border.spinner--color-is-background::before {
  @apply border-black;
}
.spinner--color-border.spinner--color-is-background::after {
  border-top-color: theme('colors.black');
}
.spinner--color-error::before {
  @apply border-error;
}
.spinner--color-error::after {
  border-top-color: theme('colors.error');
}
.spinner--color-error.spinner--color-is-background::before {
  @apply border-white;
}
.spinner--color-error.spinner--color-is-background::after {
  border-top-color: theme('colors.white');
}
.spinner--color-gold::before {
  @apply border-gold;
}
.spinner--color-gold::after {
  border-top-color: theme('colors.gold');
}
.spinner--color-gold.spinner--color-is-background::before {
  @apply border-white;
}
.spinner--color-gold.spinner--color-is-background::after {
  border-top-color: theme('colors.white');
}
.spinner--color-green::before {
  @apply border-green;
}
.spinner--color-green::after {
  border-top-color: theme('colors.green');
}
.spinner--color-green.spinner--color-is-background::before {
  @apply border-black;
}
.spinner--color-green.spinner--color-is-background::after {
  border-top-color: theme('colors.black');
}
.spinner--color-info::before {
  @apply border-info;
}
.spinner--color-info::after {
  border-top-color: theme('colors.info');
}
.spinner--color-info.spinner--color-is-background::before {
  @apply border-white;
}
.spinner--color-info.spinner--color-is-background::after {
  border-top-color: theme('colors.white');
}
.spinner--color-offwhite::before {
  @apply border-offwhite;
}
.spinner--color-offwhite::after {
  border-top-color: theme('colors.offwhite');
}
.spinner--color-offwhite.spinner--color-is-background::before {
  @apply border-black;
}
.spinner--color-offwhite.spinner--color-is-background::after {
  border-top-color: theme('colors.black');
}
.spinner--color-orange::before {
  @apply border-orange;
}
.spinner--color-orange::after {
  border-top-color: theme('colors.orange');
}
.spinner--color-orange.spinner--color-is-background::before {
  @apply border-black;
}
.spinner--color-orange.spinner--color-is-background::after {
  border-top-color: theme('colors.black');
}
.spinner--color-pink::before {
  @apply border-pink;
}
.spinner--color-pink::after {
  border-top-color: theme('colors.pink');
}
.spinner--color-pink.spinner--color-is-background::before {
  @apply border-black;
}
.spinner--color-pink.spinner--color-is-background::after {
  border-top-color: theme('colors.black');
}
.spinner--color-purple::before {
  @apply border-purple;
}
.spinner--color-purple::after {
  border-top-color: theme('colors.purple');
}
.spinner--color-purple.spinner--color-is-background::before {
  @apply border-black;
}
.spinner--color-purple.spinner--color-is-background::after {
  border-top-color: theme('colors.black');
}
.spinner--color-subtle::before {
  @apply border-subtle;
}
.spinner--color-subtle::after {
  border-top-color: theme('colors.subtle');
}
.spinner--color-subtle.spinner--color-is-background::before {
  @apply border-white;
}
.spinner--color-subtle.spinner--color-is-background::after {
  border-top-color: theme('colors.white');
}
.spinner--color-success::before {
  @apply border-success;
}
.spinner--color-success::after {
  border-top-color: theme('colors.success');
}
.spinner--color-success.spinner--color-is-background::before {
  @apply border-white;
}
.spinner--color-success.spinner--color-is-background::after {
  border-top-color: theme('colors.white');
}
.spinner--color-warning::before {
  @apply border-warning;
}
.spinner--color-warning::after {
  border-top-color: theme('colors.warning');
}
.spinner--color-warning.spinner--color-is-background::before {
  @apply border-black;
}
.spinner--color-warning.spinner--color-is-background::after {
  border-top-color: theme('colors.black');
}
.spinner--size-small {
  @apply w-6 h-6;
}
.spinner--size-medium {
  @apply w-8 h-8;
}
.spinner--size-large {
  @apply w-10 h-10;
}
@keyframes rotateButtonSpinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>
