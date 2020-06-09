<template>
  <div class="loading-indicator" />
</template>

<script>
export default {}
</script>

<style scoped>
.loading-indicator {
  /* opacity-0 */
  @apply absolute block w-8 h-8 border-grey-400 border-4 rounded-full pointer-events-none transition-opacity duration-300;
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border-top-color: #7c7c86;
  animation: rotateButtonSpinner 1.5s linear infinite;
  animation-delay: 0.2s;
}

@keyframes rotateButtonSpinner {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
