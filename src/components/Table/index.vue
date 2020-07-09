<template>
  <div class="wrapper">
    <table class="table">
      <thead>
        <tr class="table__row">
          <th v-for="(column, cellIndex) in columns" :key="cellIndex">
            <Box padding="medium">
              <Typography variant="label-large" color="subtle">{{
                column.name
              }}</Typography>
            </Box>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in tableData"
          :key="rowIndex"
          class="table__row"
        >
          <td v-for="(column, cellIndex) in columns" :key="cellIndex">
            <Box padding="medium">
              <Typography>{{ getCellData(row, column) }}</Typography>
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
import Box from '../Box/index'
import Typography from '../Typography/index'
import tableColumnKeys from '../../constants/tableColumnKeys'

export default {
  components: { Box, Typography },
  props: {
    columns: {
      type: Array,
      default: () => [],
      validator: getIsColumnsValid,
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getCellData(row, column) {
      if (column.accessor) {
        return column.accessor(get(row, column.key))
      } else {
        return get(row, column.key)
      }
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
.wrapper {
  @apply w-full overflow-x-auto;
}
.table {
  @apply w-full text-left whitespace-no-wrap;
}
.table__row {
  @apply border-b-2 border-border;
}
</style>
