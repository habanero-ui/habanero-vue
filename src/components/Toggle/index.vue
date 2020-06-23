<template>
  <div class="toggle" :class="classes">
    <label class="toggle__label">
      <input
        :id="inputId"
        :disabled="disabled"
        type="checkbox"
        :checked="active"
        class="toggle__input"
        @change="toggle"
      />
      <div class="toggle__control">
        Toggle
        <check class="toggle__check" />
      </div>
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      default: true,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    id: {
      default: '',
      type: String,
    },
  },
  computed: {
    classes() {
      return ['toggle', { 'toggle__-disabled': this.disabled }]
    },
  },
}
</script>

<style scoped>
.toggle {
  @apply relative h-6;
}
.toggle__input {
  @apply absolute block opacity-0;
}
.toggle__control {
  @apply relative z-10 mr-3 flex-shrink-0 w-12 h-6 bg-grey-500 rounded-full cursor-pointer;
  text-indent: -999em;
  transition: background-color 300ms ease-in-out;
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
  width: 1.375rem;
  height: 1.375rem;
  left: 0;
  right: auto;
  margin: 0.1875rem;
}
.toggle__check {
  @apply absolute top-0 right-0 z-10 w-4 h-4 opacity-0 transition-opacity duration-150 text-info;
  /* delay-0 */
  margin: 0.375rem;
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
