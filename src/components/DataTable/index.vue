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
        <component
          :is="rowComponent || DataTableRow"
          v-for="(row, rowIndex) in rows"
          :key="getRowKey(row, rowIndex)"
          :columns="columns"
          :onRowSelect="onRowSelect"
          :row="row"
        />
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
import DataTableHeaderCell from '../DataTableHeaderCell/index'
import DataTableRow from '../DataTableRow/index'

export default {
  components: { Box },
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
    rowComponent: {
      default: undefined,
      type: [Function, Object],
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
    DataTableHeaderCell,
    DataTableRow,
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
.data-table__cell {
  @apply p-0 align-top;
}
</style>
