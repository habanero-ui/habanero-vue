<template>
  <button class="toast-button" type="button">
    <slot />
  </button>
</template>

<style scoped>
.toast-button {
  @apply relative flex items-center cursor-pointer outline-none select-none;
}
.toast-button::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: black;
  content: '';
}
.toast-button:hover::after {
  opacity: 0.1;
}
.toast-button:active::after {
  @apply opacity-25;
}
.toast-button:focus {
  box-shadow: 0 0 0 2px white inset;
}
</style>
