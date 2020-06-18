<template>
  <footer v-if="helperText || titleText" class="modal-header">
    <Stack space="2">
      <Typography v-if="helperText" color="subtle" variant="body-small">{{
        helperText
      }}</Typography>
      <Typography v-if="titleText" variant="h5">{{ titleText }}</Typography>
    </Stack>
    <ModalHeaderButton @click.native="onCloseModal">
      <Icon class="modal-header__close-icon" name="close" size="large" />
    </ModalHeaderButton>
  </footer>
</template>

<script>
import Icon from '../Icon/index'
import ModalHeaderButton from './ModalHeaderButton'
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  components: {
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
  @apply flex justify-between items-start mb-4;
}
</style>
