<template>
  <button class="modal-header-button" type="button">
    <slot />
  </button>
</template>

<style scoped>
.modal-header-button {
  @apply relative flex items-center cursor-pointer outline-none select-none;
}
.modal-header-button::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out bg-black;
  content: '';
}
.modal-header-button:hover::after {
  opacity: 0.1;
}
.modal-header-button:active::after {
  @apply opacity-25;
}
.modal-header-button:focus {
  box-shadow: 0 0 0 2px black inset;
}
</style>
