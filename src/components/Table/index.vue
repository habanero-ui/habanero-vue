<template>
  <div :class="classes">
    <table class="table__table">
      <thead>
        <tr class="table__row">
          <th
            v-for="(column, cellIndex) in columns"
            :key="cellIndex"
            class="table__cell"
          >
            <Box padding="medium">
              <Typography variant="label-small" color="subtle">
                {{ column.name }}
              </Typography>
            </Box>
          </th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr
          v-for="(row, rowIndex) in tableData"
          :key="rowIndex"
          class="table__row"
          @click="() => handleRowClick(row)"
        >
          <td
            v-for="(column, cellIndex) in columns"
            :key="cellIndex"
            class="table__cell"
          >
            <Box padding="medium">
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
import get from 'lodash/get'
import isFunction from 'lodash/isFunction'
import tableColumnKeys from '../../constants/tableColumnKeys'
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
    onSelect: {
      default: undefined,
      type: Function,
    },
    tableData: {
      default: () => [],
      type: Array,
    },
  },
  computed: {
    classes() {
      return ['table', { 'table--selectable': this.isSelectable }]
    },

    isSelectable() {
      return !!this.onSelect
    },
  },
  methods: {
    getCellData(row, column) {
      return isFunction(column.accessor)
        ? column.accessor(row)
        : get(row, column.accessor)
    },

    handleRowClick(row) {
      if (!this.onSelect) return

      this.onSelect(row)
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
      'Table: Each array item in the "columns" prop must contain the following:',
      String(tableColumnKeys),
    )
  }

  return isValid
}
</script>

<style scoped>
.table {
  @apply w-full overflow-x-auto;
}
.table__table {
  @apply w-full text-left whitespace-no-wrap;
}
.table__row {
  @apply relative border-b-2 border-border;
  transform: scale(1);
}
.table__cell {
  @apply p-0;
}
.table--selectable .table__row {
  @apply cursor-pointer;
}
.table--selectable .table__row::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: black;
  content: '';
}
.table--selectable .table__row:hover::after {
  opacity: 0.1;
}
.table--selectable .table__row:active::after {
  opacity: 0.25;
}
</style>
