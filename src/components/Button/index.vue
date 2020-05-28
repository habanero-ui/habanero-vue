<template>
  <button
    class="w-32 p-2 text-white rounded-lg active:bg-heavy-black focus:bg-heavy-black disabled:bg-grey-300 hover:underline focus:outline-none"
  >
    <slot />
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.primary {
  @apply bg-black;
}

.secondary {
  @apply bg-white;
}

.danger {
  @apply bg-state-error-100;
}
</style>
