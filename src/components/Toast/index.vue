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
          class="toast__close-button"
          component="button"
          padding="small"
          type="button"
          @click.native="onClose"
        >
          <Icon color="black" :colorIsBackground="true" name="close" />
        </Box>
      </Column>
    </Columns>
  </Box>
</template>

<script>
import includes from 'lodash/includes'
import statuses from '../../constants/statuses'
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
  props: {
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
      validator: getIsStatusValid,
    },
  },
  computed: {
    statusIconName() {
      return this.status === 'success' ? 'checkmark' : this.status
    },
  },
}

function getIsStatusValid(value) {
  const isValid = includes(statuses, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Toast: The "status" prop must be one of the following:',
      String(statuses),
    )
  }

  return isValid
}
</script>

<style scoped>
.toast {
  @apply overflow-hidden;
}
.toast__close-button {
  @apply relative flex cursor-pointer outline-none select-none;
}
.toast__close-button::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out bg-white;
  content: '';
}
.toast__close-button:hover::after {
  opacity: 0.1;
}
.toast__close-button:active::after {
  @apply opacity-25;
}
.toast__close-button:focus {
  box-shadow: 0 0 0 2px white inset;
}
</style>
