<template>
  <dl class="definition-list"><slot /></dl>
</template>

<script>
export default {}
</script>

<style scoped>
.definition-list {
  @apply table;
  margin: -2rem;
  border-spacing: 2rem;
}
</style>
