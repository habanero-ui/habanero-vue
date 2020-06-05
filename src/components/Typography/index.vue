<template>
  <component :class="classes" :is="component"><slot /></component>
</template>

<script>
import includes from 'lodash/includes'

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
  const isValid = includes(
    ['error', 'info', 'none', 'subtle', 'success', 'warning'],
    value,
  )

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Typography: The "color" prop must be one of the following:',
      String(['error', 'info', 'none', 'subtle', 'success', 'warning']),
    )
  }

  return isValid
}

function getIsVariantValid(value) {
  const isValid = includes(
    [
      'body-extra-small',
      'body-large',
      'body-small',
      'button',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'label-large',
      'label-small',
    ],
    value,
  )

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Typography: The "variant" prop must be one of the following:',
      String([
        'body-extra-small',
        'body-large',
        'body-small',
        'button',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'label-large',
        'label-small',
      ]),
    )
  }

  return isValid
}
</script>

<style scoped>
.typography {
  display: block;
  font-family: 'Inter var', sans-serif;
}
.typography--color-none.typography--color-is-background {
  @apply text-white;
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
  font-weight: 400;
  line-height: 0.875rem;
}
.typography--variant-body-large {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.188rem;
}
.typography--variant-body-small {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.06rem;
}
.typography--variant-button {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.188rem;
}
.typography--variant-h1 {
  font-size: 6.875rem;
  font-weight: 700;
  line-height: 8.25rem;
}
.typography--variant-h2 {
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 4.19rem;
}
.typography--variant-h3 {
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.625rem;
}
.typography--variant-h4 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.375rem;
}
.typography--variant-h5 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.625rem;
}
.typography--variant-h6 {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
}
.typography--variant-label-large {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
}
.typography--variant-label-small {
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 0.875rem;
}
</style>
