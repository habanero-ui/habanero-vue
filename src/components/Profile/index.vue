<template>
  <Box>
    <Columns alignY="center">
      <Column width="content">
        <Avatar />
      </Column>
      <Column>
        <Box paddingLeft="small" paddingRight="gutter">
          <Stack space="1">
            <Typography class="profile__name" variant="label-large">
              {{ name }}
            </Typography>
            <Typography v-if="subtitle" color="subtle" variant="label-small">
              {{ subtitle }}
            </Typography>
          </Stack>
        </Box>
      </Column>
    </Columns>
  </Box>
</template>

<script>
import Avatar from '../Avatar'
import Box from '../Box'
import Column from '../Column'
import Columns from '../Columns'
import Stack from '../Stack'
import Typography from '../Typography'

export default {
  components: { Avatar, Box, Column, Columns, Stack, Typography },
  props: {
    name: {
      default: 'John Doe',
      type: String,
    },
    subtitle: {
      default: '',
      type: String,
    },
  },
}
</script>
