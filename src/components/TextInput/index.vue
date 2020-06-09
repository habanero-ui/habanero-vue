<template>
  <input
    :class="classes"
    :placeholder="placeholder"
    :type="type"
    @blur="update($event)"
    @keyup.enter="handleEnter($event)"
    @input="update($event)"
  />
</template>

<script>
import includes from 'lodash/includes'
import inputs from '../../constants/inputs'

export default {
  props: {
    delay: {
      default: 0,
      type: Number,
    },
    type: {
      default: 'text',
      type: String,
      validator: getIsTypeValid,
    },
    name: {
      default: '',
      type: String,
    },
    placeholder: {
      default: '',
      type: String,
    },
  },
  computed: {
    classes() {
      return ['input']
    },
  },
  methods: {
    update({ target }) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$emit('input', target.value)
      }, this.delay)
    },
    handleEnter({ target }) {
      this.$emit('enter', target.value)
    },
  },
}

function getIsTypeValid(value) {
  const isValid = includes(inputs, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Button: The "type" prop must be one of the following:',
      String(inputs),
    )
  }

  return isValid
}
</script>

<style scoped>
.input {
  @apply relative px-4 h-10 w-full border border-black rounded-md text-black cursor-pointer transition-colors duration-300 ease-in-out;
}
.input::after {
  @apply absolute inset-0 -m-px bg-black rounded;
  content: '';
}
.input:focus {
  @apply border-info outline-none;
}
.input:disabled {
  @apply border-grey-400 text-grey-400 cursor-not-allowed;
}

/* Base input */
/* .input {
  @apply relative text-black;

  &.is-currency {
    &::before {
      @apply absolute font-sans;
      content: '$';
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }

    & .input-field {
      @apply pl-8;
    }
  }
} */

/* Login inputs */
/* .input-login .input-field {
  @apply border-grey-500 bg-transparent text-white;

  &::placeholder {
    @apply text-grey-500;
  }

  &:focus {
    @apply border-state-info outline-none;
  }
} */

/* Optional input icons */
/* .input-icon {
  @apply fill-current pointer-events-none absolute z-10;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
} */

/* Optional input clear button */
/* .input-clear {
  @apply fill-current text-black absolute z-10;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
} */

/* Input inline modifiers */
/* .input-field.is-inline {
  @apply inline-block mx-2 w-16;
} */

/* Input icon modifiers */
/* .input.has-icon .input-field {
  @apply pl-14;
} */

/* Size modifiers */
/* .input-field-sm {
  max-width: 14.75rem;
}

.input-field-lg {
  max-width: 30rem;
} */
</style>
