<template>
  <component :class="classes" :is="is"><slot /></component>
</template>

<script>
import includes from 'lodash/includes'

export default {
  props: {
    component: { type: String },
    variant: {
      default: 'body-large',
      validator: getIsVariantValid,
    },
  },
  computed: {
    classes() {
      return ['typography', `typography--${this.variant}`]
    },
    is() {
      return this.component || 'span'
    },
  },
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
.typography--body-extra-small {
  @apply text-body-extra-small;
  font-weight: 400;
  line-height: 0.875rem;
}
.typography--body-large {
  @apply text-body-large;
  font-weight: 400;
  line-height: 1.188rem;
}
.typography--body-small {
  @apply text-body-small;
  font-weight: 400;
  line-height: 1.06rem;
}
.typography--button {
  @apply text-button;
  font-weight: 700;
  line-height: 1.188rem;
}
.typography--h1 {
  @apply text-h1;
  font-weight: 700;
  line-height: 8.25rem;
}
.typography--h2 {
  @apply text-h2;
  font-weight: 600;
  line-height: 4.19rem;
}
.typography--h3 {
  @apply text-h3;
  font-weight: 600;
  line-height: 3.625rem;
}
.typography--h4 {
  @apply text-h4;
  font-weight: 600;
  line-height: 2.375rem;
}
.typography--h5 {
  @apply text-h5;
  font-weight: 600;
  line-height: 1.625rem;
}
.typography--h6 {
  @apply text-h6;
  font-weight: 400;
  line-height: 1.5rem;
}
.typography--label-large {
  @apply text-label-large;
  font-weight: 600;
  line-height: 1rem;
}
.typography--label-small {
  @apply text-label-small;
  font-weight: 600;
  line-height: 0.875rem;
}
</style>
