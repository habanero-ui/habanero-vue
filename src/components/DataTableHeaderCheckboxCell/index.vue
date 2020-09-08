<template>
  <Box padding="medium" paddingY="3.25">
    <Checkbox
      :isChecked="column.headerIsChecked"
      :onIsCheckedChange="handleCheckboxIsCheckedChange"
      @click.native="handleCheckboxClick"
    />
  </Box>
</template>

<script>
import Box from '../Box/index'
import Checkbox from '../Checkbox/index'

export default {
  components: { Box, Checkbox },
  props: {
    column: {
      default: () => ({}),
      type: Object,
    },
  },
  methods: {
    handleCheckboxClick(e) {
      e.preventDefault()
      e.stopPropagation()
    },

    handleCheckboxIsCheckedChange(isChecked) {
      if (!this.column.onHeaderIsCheckedChange) return

      this.column.onHeaderIsCheckedChange(isChecked)
    },
  },
}
</script>
