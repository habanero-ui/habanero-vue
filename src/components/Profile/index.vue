<template>
  <Box v-if="image && (firstName || lastName)">
    <Columns alignY="center">
      <Column width="content">
        <Avatar :firstName="firstName" :image="image" :lastName="lastName" />
      </Column>
      <Column>
        <Box paddingLeft="small">
          <Stack space="1">
            <Typography class="profile__name" variant="label-large">
              {{ firstName }} {{ lastName }}
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
    firstName: {
      default: '',
      type: String,
    },
    image: {
      default: '',
      type: String,
    },
    lastName: {
      default: '',
      type: String,
    },
    subtitle: {
      default: '',
      type: String,
    },
  },
  computed: {
    firstInitial() {
      return this.firstName ? this.firstName[0] : ''
    },
    lastInitial() {
      return this.lastName ? this.lastName[0] : ''
    },
  },
}
</script>
