<template>
  <component :is="component" :class="classes">
    <slot />
  </component>
</template>

<script>
import includes from 'lodash/includes'

import colors from '../../constants/colors'
import variants from '../../constants/textVariants'

export default {
  props: {
    component: {
      default: 'span',
      type: String,
    },
    color: {
      default: 'none',
      validator: getIsColorValid,
    },
    colorIsBackground: {
      default: false,
      type: Boolean,
    },
    variant: {
      default: 'body-large',
      validator: getIsVariantValid,
    },
  },
  computed: {
    classes() {
      return [
        'typography',
        {
          'typography--color-is-background': this.colorIsBackground,
        },
        `typography--color-${this.color}`,
        `typography--variant-${this.variant}`,
      ]
    },
  },
}

function getIsColorValid(value) {
  const isValid = includes(colors, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Typography: The "color" prop must be one of the following:',
      String(colors),
    )
  }

  return isValid
}

function getIsVariantValid(value) {
  const isValid = includes(variants, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Typography: The "variant" prop must be one of the following:',
      String(variants),
    )
  }

  return isValid
}
</script>

<style scoped>
.typography {
  font-family: inter, sans-serif;
}
.typography--color-gold {
  @apply text-gold;
}
.typography--color-gold.typography--color-is-background {
  @apply text-white;
}
.typography--color-black {
  @apply text-black;
}
.typography--color-black.typography--color-is-background {
  @apply text-white;
}
.typography--color-blue {
  @apply text-blue;
}
.typography--color-blue.typography--color-is-background {
  @apply text-black;
}
.typography--color-border {
  @apply text-border;
}
.typography--color-border.typography--color-is-background {
  @apply text-black;
}
.typography--color-green {
  @apply text-green;
}
.typography--color-green.typography--color-is-background {
  @apply text-black;
}
.typography--color-orange {
  @apply text-orange;
}
.typography--color-orange.typography--color-is-background {
  @apply text-black;
}
.typography--color-pink {
  @apply text-pink;
}
.typography--color-pink.typography--color-is-background {
  @apply text-black;
}
.typography--color-purple {
  @apply text-purple;
}
.typography--color-purple.typography--color-is-background {
  @apply text-black;
}
.typography--color-error {
  @apply text-error;
}
.typography--color-error.typography--color-is-background {
  @apply text-white;
}
.typography--color-info {
  @apply text-info;
}
.typography--color-info.typography--color-is-background {
  @apply text-white;
}
.typography--color-offwhite {
  @apply text-offwhite;
}
.typography--color-offwhite.typography--color-is-background {
  @apply text-black;
}
.typography--color-subtle {
  @apply text-subtle;
}
.typography--color-subtle.typography--color-is-background {
  @apply text-white;
}
.typography--color-success {
  @apply text-success;
}
.typography--color-success.typography--color-is-background {
  @apply text-white;
}
.typography--color-warning {
  @apply text-warning;
}
.typography--color-warning.typography--color-is-background {
  @apply text-black;
}
.typography--variant-body-extra-small {
  font-size: 0.75rem;
  line-height: 0.875rem;
}
.typography--variant-body-large {
  font-size: 1rem;
  line-height: 1.188rem;
}
.typography--variant-body-small {
  font-size: 0.875rem;
  line-height: 1.06rem;
}
.typography--variant-button {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
}
.typography--variant-button:hover {
  text-decoration: underline;
}
.typography--variant-h1 {
  font-size: 6.875rem;
  font-weight: 500;
  line-height: 8.25rem;
}
.typography--variant-h2 {
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 4.19rem;
}
.typography--variant-h3 {
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.625rem;
}
.typography--variant-h4 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.375rem;
}
.typography--variant-h5 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.625rem;
}
.typography--variant-h6 {
  font-size: 1.25rem;
  line-height: 1.5rem;
}
.typography--variant-label-large {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
}
.typography--variant-label-small {
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.875rem;
}
</style>
