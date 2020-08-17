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
        { source: 'Users', value: (10 - this.row.rating).toFixed(1) },
        { source: 'Metacritic', value: (this.row.rating / 2).toFixed(1) },
      ]
    },
  },
}
</script>
