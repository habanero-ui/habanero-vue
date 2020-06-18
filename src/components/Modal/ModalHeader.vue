<template>
  <footer v-if="helperText || titleText" class="modal-header">
    <Stack direction="column" space="2">
      <Typography
        v-if="helperText"
        variant="body-small"
        class="text-grey-500"
        >{{ helperText }}</Typography
      >
      <Typography v-if="titleText" variant="h5">{{ titleText }}</Typography>
    </Stack>
  </footer>
</template>

<script>
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  components: {
    Stack,
    Typography,
  },
  props: {
    helperText: {
      default: 'Optional Label',
      type: String,
    },
    titleText: {
      default: 'Modal Title',
      type: String,
    },
  },
}
</script>

<style scoped>
.modal-header {
  @apply mb-4;
}
</style>
