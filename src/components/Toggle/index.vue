<template>
  <div class="toggle" :class="classes">
    <label class="toggle__label">
      <input
        :checked="active"
        :class="inputClasses"
        :disabled="disabled"
        type="checkbox"
      />
      <!-- <input
        :id="inputId"
        :checked="active"
        :class="inputClasses"
        :disabled="disabled"
        type="checkbox"
        @change="toggle"
      /> -->
      <div :class="controlClasses">
        Toggle
        <Icon
          class="toggle__check"
          name="check"
          :size="size === 'small' ? 'small' : 'medium'"
        />
      </div>
      <slot />
    </label>
  </div>
</template>

<script>
import includes from 'lodash/includes'
import Icon from '../Icon'

export default {
  components: {
    Icon,
  },
  props: {
    active: {
      default: true,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'large',
      type: String,
      validator: getIsSizeValid,
    },
  },
  computed: {
    controlClasses() {
      return ['toggle__control', `toggle__control--size-${this.size}`]
    },
    classes() {
      return ['toggle', { 'toggle-disabled': this.disabled }]
    },
    inputClasses() {
      return ['toggle__input']
    },
  },
}

function getIsSizeValid(value) {
  const isValid = includes(['small', 'large'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Toggle: The "size" prop must be one of the following:',
      String(['small', 'large']),
    )
  }

  return isValid
}
</script>

<style scoped>
.toggle {
  @apply relative;
  height: 1.75rem;
}
.toggle__input {
  @apply absolute block opacity-0;
}
.toggle__control {
  @apply relative z-10 mr-3 flex-shrink-0 bg-grey-500 rounded-full cursor-pointer;
  text-indent: -999em;
  transition: background-color 300ms ease-in-out;
}
.toggle__control--size-small {
  @apply h-5 w-10;
}
.toggle__control--size-large {
  height: 1.75rem;
  width: 3.5rem;
}

.toggle__control::after,
.toggle__check {
  @apply absolute;
  content: '';
}
.toggle__control::before {
  @apply absolute inset-0 -m-1 border border-transparent rounded-full transition-colors duration-300 ease-in-out;
  content: '';
}
.toggle__control::after {
  @apply bg-white rounded-full transition-transform duration-150 ease-in-out;
  right: auto;
  margin: 0.1875rem;
}
.toggle__control.toggle__control--size-small::after {
  width: 0.875rem;
  height: 0.875rem;
  left: -8px;
}
.toggle__control.toggle__control--size-large::after {
  width: 1.375rem;
  height: 1.375rem;
  left: 0;
}
.toggle__check {
  @apply absolute top-0 z-10 opacity-0 transition-opacity duration-150 text-info;
  /* delay-0 */
  margin: 0.1875rem;
  right: -1px;
}

.toggle__label {
  @apply flex items-center;
}

/* Active state */
.toggle__input:checked + .toggle__control {
  @apply bg-info;
}

.toggle__input:checked + .toggle__control::after {
  transform: translateX(1.75rem);
}

.toggle__input:checked + .toggle__control > .toggle__check {
  @apply opacity-100 delay-150;
}

/* Focus state */
.toggle__input:focus + .toggle__control::before {
  @apply border-grey-500;
}

.toggle__input:checked:focus + .toggle__control::before {
  @apply border-info;
}

.toggle__input:disabled:focus + .toggle__control::before,
.toggle__input:disabled:checked:focus + .toggle__control::before {
  @apply border-grey-200;
}

/* Disabled state */
.toggle.is-disabled .toggle__control {
  @apply bg-grey-200;
}

.toggle.is-disabled .toggle__control::after {
  @apply bg-grey-300;
}

.toggle.is-disabled .toggle__check {
  @apply text-white;
}
</style>
