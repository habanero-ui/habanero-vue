<template>
  <Box
    v-if="isVisible"
    class="data-table-action-cell"
    paddingX="medium"
    paddingY="2.5"
  >
    <div>
      <Button
        :iconName="column.iconName"
        :iconSize="column.iconSize || 'medium'"
        variant="text"
        @click.native="handleButtonClick"
      />
    </div>
  </Box>
</template>

<script>
import isFunction from 'lodash/isFunction'

import Box from '../Box/index'
import Button from '../Button/index'

export default {
  components: { Box, Button },
  props: {
    column: {
      default: () => ({}),
      type: Object,
    },
    row: {
      default: () => ({}),
      type: Object,
    },
  },
  computed: {
    isVisible() {
      return (
        !isFunction(this.column.getIsVisible) ||
        this.column.getIsVisible(this.row)
      )
    },
  },
  methods: {
    handleButtonClick() {
      if (!this.column.onClick) return

      this.column.onClick(this.row)
    },
  },
}
</script>

<style scoped>
.data-table-action-cell {
  @apply flex justify-end;
}
</style>
