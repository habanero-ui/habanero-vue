<template>
  <Box backgroundColor="black" borderRadius="medium" class="toast">
    <Columns alignY="stretch" space="medium">
      <Column width="content">
        <Box :backgroundColor="status" padding="small">
          <Icon
            :color="status"
            :colorIsBackground="true"
            :name="statusIconName"
          />
        </Box>
      </Column>
      <Column>
        <Box paddingY="medium">
          <Stack space="0.5">
            <Typography
              color="black"
              :colorIsBackground="true"
              variant="label-small"
            >
              {{ label }}
            </Typography>
            <Typography
              v-if="message"
              color="black"
              :colorIsBackground="true"
              variant="body-extra-small"
            >
              {{ message }}
            </Typography>
          </Stack>
        </Box>
      </Column>
      <Column width="content">
        <Box
          backgroundColor="black"
          class="toast__close-button"
          component="button"
          padding="small"
          showInteractionOverlay
          type="button"
          @click.native="handleCloseButtonClick"
        >
          <Icon color="black" :colorIsBackground="true" name="close" />
        </Box>
      </Column>
    </Columns>
  </Box>
</template>

<script>
import statuses from '../../constants/statuses'
import PropValidation from '../../mixins/PropValidation'
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  components: {
    Box,
    Column,
    Columns,
    Icon,
    Stack,
    Typography,
  },
  mixins: [
    PropValidation({
      status: statuses,
    }),
  ],
  props: {
    id: {
      default: '',
      type: [Number, String],
    },
    label: {
      default: '',
      type: String,
    },
    message: {
      default: '',
      type: String,
    },
    onClose: {
      default: undefined,
      type: Function,
    },
    status: {
      default: 'info',
      type: String,
    },
  },
  computed: {
    statusIconName() {
      return this.status === 'success' ? 'checkmark' : this.status
    },
  },
  methods: {
    handleCloseButtonClick() {
      this.onClose(this.id)
    },
  },
}
</script>

<style scoped>
.toast {
  @apply overflow-hidden;
}
.toast__close-button {
  @apply flex outline-none select-none;
}
.toast__close-button:focus {
  box-shadow: 0 0 0 2px white inset;
}
</style>
