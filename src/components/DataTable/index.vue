<template>
  <div :class="classes">
    <table class="data-table__table">
      <thead>
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
        <tr
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="data-table__row"
          @click="() => handleRowClick(row)"
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
        </tr>
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
import Typography from '../Typography/index'
import DataTableCell from './DataTableCell'
import DataTableHeaderCell from './DataTableHeaderCell'

export default {
  components: { Box, Typography },
  props: {
    columns: {
      default: () => [],
      type: Array,
      validator: getIsColumnsValid,
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
  computed: {
    classes() {
      return ['data-table', { 'data-table--selectable': this.isSelectable }]
    },

    isSelectable() {
      return !!this.onRowSelect
    },
  },
  created() {
    if (some(this.columns, (column) => column.accessor)) {
      // eslint-disable-next-line
      console.warn(
        'The accessor property on columns passed into the DataTable component is deprecated and will be removed in version 2.0.0. Please use the "key" property for string accessors, and the "getValue" property for function accessors.',
      )
    }
  },
  methods: {
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
  @apply relative border-b-2 border-border;
  transform: scale(1);
}
.data-table__body .data-table__row:last-child {
  @apply border-0;
}
.data-table__cell {
  @apply p-0 align-top;
}
.data-table--selectable .data-table__body .data-table__row {
  @apply cursor-pointer;
}
.data-table--selectable .data-table__body .data-table__row::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out -mb-px;
  background-color: black;
  content: '';
}
.data-table--selectable .data-table__body .data-table__row:hover::after {
  opacity: 0.1;
}
.data-table--selectable .data-table__body .data-table__row:active::after {
  opacity: 0.25;
}
</style>
