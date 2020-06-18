<template>
  <header v-if="helperText || titleText" class="modal-header">
    <Columns space="6">
      <Column>
        <Stack space="2">
          <Typography v-if="helperText" color="subtle" variant="body-small">
            {{ helperText }}
          </Typography>
          <Typography v-if="titleText" variant="h5">{{ titleText }}</Typography>
        </Stack>
      </Column>
      <Column width="content">
        <ModalHeaderButton @click.native="onCloseModal">
          <Icon class="modal-header__close-icon" name="close" size="large" />
        </ModalHeaderButton>
      </Column>
    </Columns>
  </header>
</template>

<script>
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Stack from '../Stack/index'
import Typography from '../Typography/index'
import ModalHeaderButton from './ModalHeaderButton'

export default {
  components: {
    Column,
    Columns,
    Icon,
    ModalHeaderButton,
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

<style scoped>
.modal-header {
  @apply flex flex-col pb-4;
}
</style>
