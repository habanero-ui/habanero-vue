<template>
  <div class="tab" :tabIndex="disabled ? -1 : 0">Tab</div>
</template>

<script>
export default {
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    value: {
      default: undefined,
      type: [Number, String],
    },
  },
}
</script>

<style>
.tab {
  @apply border-b-2 border-grey-300 cursor-pointer flex flex-none items-center h-10 px-6 relative outline-none;
  min-width: 8rem;
}
.tab::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: #000;
  content: '';
}
.tab[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.tab:hover:not([disabled])::after {
  opacity: 0.1;
}
.tab:active:not([disabled])::after {
  opacity: 0.25;
}
.tab:focus:not([disabled]) {
  @apply border-info;
}
</style>
