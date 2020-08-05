<template>
  <Box
    class="data-table-row"
    component="tr"
    :showInteractionOverlay="!!onRowSelect"
    @click.native="handleClick"
  >
    <td
      v-for="(column, cellIndex) in columns"
      :key="cellIndex"
      class="data-table__cell"
    >
      <component
        :is="column.cellComponent || DataTableCell"
        :column="column"
        :row="row"
      />
    </td>
  </Box>
</template>

<script>
import Box from '../Box/index'
import DataTableCell from '../DataTableCell/index'

export default {
  components: { Box },
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
  data: () => ({
    DataTableCell,
  }),
  methods: {
    handleClick(e) {
      if (!this.onRowSelect) return

      this.onRowSelect(this.row, e)
    },
  },
}
</script>

<style scoped>
.data-table-row {
  transform: scale(1);
}
.data-table-row:nth-child(odd) {
  @apply bg-offwhite;
}
.data-table-row:last-child {
  @apply border-0;
}
.data-table__cell {
  @apply p-0 align-top;
}
</style>
