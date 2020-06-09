<template>
  <div class="loading-indicator" />
</template>

<script>
export default {}
</script>

<style scoped>
.loading-indicator {
  @apply w-8 h-8 border-grey-400 border-4 rounded-full pointer-events-none transition-opacity duration-300;
  animation-delay: 0.2s;
  animation: rotateButtonSpinner 1.5s linear infinite;
  border-top-color: theme('colors.grey-500');
}

@keyframes rotateButtonSpinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>
