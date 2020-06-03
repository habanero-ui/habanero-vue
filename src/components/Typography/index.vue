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
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 0.875rem;
}
.typography--body-large {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.188rem;
}
.typography--body-small {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.06rem;
}
.typography--button {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.188rem;
}
.typography--h1 {
  font-size: 6.875rem;
  font-weight: 700;
  line-height: 8.25rem;
}
.typography--h2 {
  font-size: 3.5rem;
  font-weight: 600;
  line-height: 4.19rem;
}
.typography--h3 {
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.625rem;
}
.typography--h4 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.375rem;
}
.typography--h5 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.625rem;
}
.typography--h6 {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;
}
.typography--label-large {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
}
.typography--label-small {
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 0.875rem;
}
</style>
