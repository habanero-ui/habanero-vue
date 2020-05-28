<template>
  <button class="root"><slot /></button>
</template>

<script>
export default {}
</script>

<style scoped>
.root {
  @apply w-32 p-2 rounded-lg;
}

.root:active {
  @apply bg-heavy-black;
}

.root:focus {
  @apply bg-heavy-black outline-none;
}

.root:disabled {
  @apply bg-grey-300;
}

.root:hover {
  @apply underline;
}
.primary {
  @apply text-white bg-black;
}

.secondary {
  @apply text-black bg-white;
}

.danger {
  @apply text-white bg-state-error-100;
}
</style>
