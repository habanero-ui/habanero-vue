<template>
  <div class="data-table">
    <table class="data-table__table">
      <thead class="data-table__head">
        <tr class="data-table__row">
          <th
            v-for="(column, cellIndex) in columns"
            :key="cellIndex"
            class="data-table__cell"
          >
            <component
              :is="column.headerCellComponent || DataTableHeaderCell"
              :column="column"
              :onSortByChange="onSortByChange"
              :onSortDirectionChange="onSortDirectionChange"
              :sortBy="sortBy"
              :sortDirection="sortDirection"
            />
          </th>
        </tr>
      </thead>
      <tbody class="data-table__body">
        <Box
          v-for="(row, rowIndex) in rows"
          :key="getRowKey(row, rowIndex)"
          class="data-table__row"
          component="tr"
          :showInteractionOverlay="!!onRowSelect"
          @click.native="() => handleRowClick(row)"
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
      </tbody>
    </table>
  </div>
</template>

<script>
import includes from 'lodash/includes'
import isNil from 'lodash/isNil'
import some from 'lodash/some'

import sortDirections from '../../constants/sortDirections'
import Box from '../Box/index'
import DataTableCell from '../DataTableCell/index'
import DataTableHeaderCell from '../DataTableHeaderCell/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Typography },
  props: {
    columns: {
      default: () => [],
      type: Array,
      validator: getIsColumnsValid,
    },
    getId: {
      default: (row) => row.id,
      type: Function,
    },
    onRowSelect: {
      default: undefined,
      type: Function,
    },
    onSortByChange: {
      default: () => {},
      type: Function,
    },
    onSortDirectionChange: {
      default: () => {},
      type: Function,
    },
    rows: {
      default: () => [],
      type: Array,
    },
    sortBy: {
      default: '',
      type: String,
    },
    sortDirection: {
      default: 'asc',
      type: String,
      validator: getIsSortDirectionValid,
    },
  },
  data: () => ({
    DataTableCell,
    DataTableHeaderCell,
  }),
  created() {
    if (some(this.columns, (column) => column.accessor)) {
      // eslint-disable-next-line
      console.warn(
        'The accessor property on columns passed into the DataTable component is deprecated and will be removed in version 2.0.0. Please use the "key" property for string accessors, and the "getValue" property for function accessors.',
      )
    }
  },
  methods: {
    getRowKey(row, index) {
      return !isNil(this.getId(row)) ? this.getId(row) : index
    },

    handleRowClick(row) {
      if (!this.onRowSelect) return

      this.onRowSelect(row)
    },
  },
}

function getIsColumnsValid(columns) {
  const isValid = !some(columns, (column) => isNil(column.name))

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'DataTable: Each array item in the "columns" prop must have a "name" key.',
    )
  }

  return isValid
}

function getIsSortDirectionValid(value) {
  const isValid = includes(sortDirections, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'DataTable: The "sortDirection" prop must be one of the following when defined:',
      String(sortDirections),
    )
  }

  return isValid
}
</script>

<style scoped>
.data-table {
  @apply w-full overflow-x-auto;
}
.data-table__table {
  @apply w-full text-left whitespace-no-wrap;
}
.data-table__row {
  transform: scale(1);
}
.data-table__head .data-table__row {
  @apply border-b;
}
.data-table__body .data-table__row:nth-child(odd) {
  @apply bg-offwhite;
}
.data-table__body .data-table__row:last-child {
  @apply border-0;
}
.data-table__cell {
  @apply p-0 align-top;
}
</style>
