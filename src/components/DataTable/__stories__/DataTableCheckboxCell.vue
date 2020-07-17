<template>
  <Box padding="medium">
    <Checkbox
      :isChecked="seen"
      :onIsCheckedChange="handleCheckboxIsCheckedChange"
    />
  </Box>
</template>

<script>
import Box from '../../Box/index'
import Checkbox from '../../Checkbox/index'

export default {
  components: { Box, Checkbox },
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
    seen() {
      return this.row.seen
    },
  },
  methods: {
    handleCheckboxIsCheckedChange(isChecked) {
      if (!this.column.onRowChange) return

      this.column.onRowChange({ ...this.row, seen: isChecked })
    },
  },
}
</script>
