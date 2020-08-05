<template>
  <DataTableRow
    :class="{ bad: row.rating < 9, good: row.rating >= 9 }"
    :columns="columns"
    :onRowSelect="onRowSelect"
    :row="row"
  />
</template>

<script>
import DataTableRow from '../../DataTableRow/index'

export default {
  components: { DataTableRow },
  props: {
    columns: {
      default: () => [],
      type: Array,
    },
    onRowSelect: {
      default: undefined,
      type: Function,
    },
    row: {
      default: () => {},
      type: Object,
    },
  },
}
</script>

<style scoped>
.bad {
  @apply border-b-2 border-error;
}
.good {
  @apply border-b-2 border-success;
}
</style>
