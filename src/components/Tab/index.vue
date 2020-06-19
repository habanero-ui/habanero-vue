<template>
  <div
    :class="classes"
    :disabled="disabled"
    :tabIndex="disabled ? -1 : 0"
    @click="handleClick"
    @keydown.enter.space="handleKeyDown"
    @keyup.enter.space="handleKeyUp"
  >
    <slot>
      <Typography :variant="isSelected ? 'label-large' : 'body-large'">
        {{ text || name }}
      </Typography>
    </slot>
  </div>
</template>

<script>
import Typography from '../Typography'

export default {
  components: {
    Typography,
  },
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    isSelected: {
      default: false,
      type: Boolean,
    },
    name: {
      default: undefined,
      type: [Number, String],
    },
    onSelect: {
      default: undefined,
      type: Function,
    },
    text: {
      default: undefined,
      type: String,
    },
  },
  data: () => ({
    isKeyDown: false,
  }),
  computed: {
    classes() {
      return [
        'tab',
        {
          'tab--is-key-down': !!this.isKeyDown,
          'tab--is-selected': !!this.isSelected,
        },
      ]
    },
  },
  methods: {
    handleClick() {
      if (this.isSelected || this.disabled) return

      this.onSelect(this.name)
    },
    handleKeyDown() {
      if (this.disabled) return

      this.isKeyDown = true
    },
    handleKeyUp() {
      this.isKeyDown = false

      if (this.isSelected || this.disabled) return

      this.onSelect(this.name)
    },
  },
}
</script>

<style scoped>
.tab {
  @apply border-b-2 border-grey-300 cursor-pointer flex flex-none items-center h-10 px-6 relative outline-none;
  min-width: 8rem;
}
.tab::before {
  @apply absolute inset-0 pointer-events-none transition-colors duration-300 ease-in-out border-2 border-transparent;
  margin-bottom: -2px;
  content: '';
}
.tab::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: black;
  content: '';
}
.tab[disabled] {
  @apply cursor-not-allowed opacity-50;
}
.tab--is-selected {
  @apply border-info;
}
.tab:focus:not([disabled])::before {
  @apply border-info;
}
.tab:hover:not([disabled])::after {
  opacity: 0.1;
}
.tab:active:not([disabled])::after {
  @apply opacity-25;
}
.tab--is-key-down::after {
  @apply opacity-25;
}
</style>
