<template>
  <Box padding="medium" :paddingY="paddingY">
    <Checkbox
      :isChecked="isChecked"
      :onIsCheckedChange="handleCheckboxIsCheckedChange"
      @click.native="handleCheckboxClick"
    />
  </Box>
</template>

<script>
import getWithAccessor from '../../helpers/getWithAccessor'
import Box from '../Box/index'
import Checkbox from '../Checkbox/index'

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
    isChecked() {
      return getWithAccessor(this.row, this.column.getValue || this.column.key)
    },

    paddingY() {
      return this.column.paddingY || 3.25
    },
  },
  methods: {
    handleCheckboxClick(e) {
      e.preventDefault()
      e.stopPropagation()
    },

    handleCheckboxIsCheckedChange(isChecked) {
      if (!this.column.onIsCheckedChange) return

      this.column.onIsCheckedChange(this.row, isChecked)
    },
  },
}
</script>
