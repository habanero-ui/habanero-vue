<template>
  <Box padding="medium">
    <Stack space="xsmall">
      <Columns v-for="rating in ratings" :key="rating.source" space="xxsmall">
        <Column>
          <Typography color="subtle" variant="label-small">
            {{ rating.source }}:
          </Typography>
        </Column>
        <Column width="content">
          <Typography variant="body-extra-small">
            {{ rating.value }}
          </Typography>
        </Column>
      </Columns>
    </Stack>
  </Box>
</template>

<script>
import random from 'lodash/random'
import getWithAccessor from '../../../helpers/getWithAccessor'
import Box from '../../Box/index'
import Column from '../../Column/index'
import Columns from '../../Columns/index'
import Stack from '../../Stack/index'
import Typography from '../../Typography/index'

export default {
  components: { Box, Column, Columns, Stack, Typography },
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
        { source: 'Random', value: random(0.0, 10.0, true).toFixed(1) },
        { source: 'Metacritic', value: random(0.0, 10.0, true).toFixed(1) },
      ]
    },
    criticRating() {
      return getWithAccessor(this.row, this.column.accessor)
    },
  },
}
</script>
