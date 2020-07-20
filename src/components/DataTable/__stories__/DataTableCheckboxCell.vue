<template>
  <Box padding="medium">
    <Checkbox
      :isChecked="value"
      :onIsCheckedChange="handleCheckboxIsCheckedChange"
    />
  </Box>
</template>

<script>
import getWithAccessor from '../../../helpers/getWithAccessor'
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
    value() {
      return getWithAccessor(this.row, this.column.getValue || this.column.key)
    },
  },
  methods: {
    handleCheckboxIsCheckedChange(isChecked) {
      if (!this.column.onIsCheckedChange) return

      this.column.onIsCheckedChange(this.row, isChecked)
    },
  },
}
</script>
