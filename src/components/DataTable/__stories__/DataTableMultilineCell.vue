<template>
  <Box padding="medium">
    <Stack space="xxsmall">
      <Typography
        v-for="rating in ratings"
        :key="rating.source"
        variant="body-extra-small"
        >{{ rating.source }}: {{ rating.value }}</Typography
      >
    </Stack>
  </Box>
</template>

<script>
import random from 'lodash/random'
import getWithAccessor from '../../../helpers/getWithAccessor'
import Box from '../../Box/index'
import Stack from '../../Stack/index'
import Typography from '../../Typography/index'

export default {
  components: { Box, Stack, Typography },
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
    ratings() {
      return [
        { source: 'Critics', value: this.row.rating.toFixed(1) },
        { source: 'Users', value: random(0.0, 10.0, true).toFixed(1) },
      ]
    },
    criticRating() {
      return getWithAccessor(this.row, this.column.accessor)
    },
  },
}
</script>
