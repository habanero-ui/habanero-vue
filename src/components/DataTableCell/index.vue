<template>
  <Box padding="medium" :paddingY="column.paddingY">
    <Typography class="block" variant="body-extra-small">
      {{ value }}
    </Typography>
  </Box>
</template>

<script>
import getWithAccessor from '../../helpers/getWithAccessor'
import Box from '../Box/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Typography },
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
      return getWithAccessor(
        this.row,
        this.column.accessor || this.column.getValue || this.column.key,
      )
    },
  },
}
</script>
