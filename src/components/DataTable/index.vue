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
            <Box padding="medium">
              <Typography variant="label-small" color="subtle">
                {{ column.name }}
              </Typography>
            </Box>
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
              :is="column.cellComponent"
              v-if="column.cellComponent"
              :column="column"
              :row="row"
            />
            <Box v-else padding="medium">
              <Typography variant="body-extra-small">
                {{ getCellData(row, column) }}
              </Typography>
            </Box>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import forEach from 'lodash/forEach'

import tableColumnKeys from '../../constants/tableColumnKeys'
import getWithAccessor from '../../helpers/getWithAccessor'
import Box from '../Box/index'
import Typography from '../Typography/index'

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
    rows: {
      default: () => [],
      type: Array,
    },
  },
  computed: {
    classes() {
      return ['data-table', { 'data-table--selectable': this.isSelectable }]
    },

    isSelectable() {
      return !!this.onRowSelect
    },
  },
  methods: {
    getCellData(row, column) {
      return getWithAccessor(row, column.accessor)
    },

    handleRowClick(row) {
      if (!this.onRowSelect) return

      this.onRowSelect(row)
    },
  },
}

function getIsColumnsValid(data) {
  let isValid = true

  forEach(data, (item) => {
    if (!tableColumnKeys.every((k) => k in item)) {
      isValid = false
    }
  })

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'DataTable: Each array item in the "columns" prop must contain the following:',
      String(tableColumnKeys),
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
.data-table__cell {
  @apply p-0 align-top;
}
.data-table--selectable .data-table__body .data-table__row {
  @apply cursor-pointer;
}
.data-table--selectable .data-table__body .data-table__row::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
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
