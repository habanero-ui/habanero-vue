<template>
  <Box class="data-table-action-cell" paddingX="medium" paddingY="small">
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
