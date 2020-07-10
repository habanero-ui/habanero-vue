<template>
  <Box paddingX="medium" paddingY="2.75">
    <Columns class="flex-none" alignY="center" space="xsmall">
      <Column width="content">
        <Avatar :firstName="movieName" image="http://placekitten.com/256/256" />
      </Column>
      <Column>
        <Stack space="xxsmall">
          <Typography variant="body-extra-small">{{ movieName }}</Typography>
          <Typography color="subtle" variant="body-extra-small">
            Some Other Text
          </Typography>
        </Stack>
      </Column>
    </Columns>
  </Box>
</template>

<script>
import getWithAccessor from '../../../helpers/getWithAccessor'
import Avatar from '../../Avatar/index'
import Box from '../../Box/index'
import Column from '../../Column/index'
import Columns from '../../Columns/index'
import Stack from '../../Stack/index'
import Typography from '../../Typography/index'

export default {
  components: { Avatar, Box, Column, Columns, Stack, Typography },
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
    movieName() {
      return getWithAccessor(this.row, this.column.accessor)
    },
  },
}
</script>
