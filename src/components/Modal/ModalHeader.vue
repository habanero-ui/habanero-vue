<template>
  <header>
    <Box paddingX="gutter">
      <Columns space="6">
        <Column>
          <Stack space="2">
            <Typography v-if="helperText" color="subtle" variant="body-small">
              {{ helperText }}
            </Typography>
            <Typography v-if="titleText" variant="h5">{{
              titleText
            }}</Typography>
          </Stack>
        </Column>
        <Column v-if="onCloseModal" width="content">
          <Box marginRight="-xxsmall" marginTop="-xxsmall">
            <Button
              iconName="close"
              iconSize="large"
              variant="text"
              @click.native="onCloseModal"
            />
          </Box>
        </Column>
      </Columns>
    </Box>
  </header>
</template>

<script>
import Box from '../Box/index'
import Button from '../Button/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  components: {
    Box,
    Button,
    Column,
    Columns,
    Stack,
    Typography,
  },
  props: {
    helperText: {
      default: '',
      type: String,
    },
    onCloseModal: {
      default: undefined,
      type: Function,
    },
    titleText: {
      default: '',
      type: String,
    },
  },
}
</script>
