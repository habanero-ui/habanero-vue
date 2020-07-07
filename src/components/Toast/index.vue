<template>
  <div class="bg-black rounded">
    <Columns space="4">
      <Column width="content">
        <Box :backgroundColor="variant" class="p-2 rounded">
          <Icon :color="variant" :colorIsBackground="true" :name="icon" />
        </Box>
      </Column>
      <Column width="fluid">
        <Stack class="py-4" space="0.5">
          <Typography
            color="black"
            :colorIsBackground="true"
            variant="label-small"
          >
            {{ label }}
          </Typography>
          <Typography
            color="black"
            :colorIsBackground="true"
            variant="body-extra-small"
          >
            {{ message }}
          </Typography>
        </Stack>
      </Column>
      <Column width="content">
        <ToastButton class="p-2" @click.native="onCloseToast">
          <Icon color="black" :colorIsBackground="true" name="close" />
        </ToastButton>
      </Column>
    </Columns>
  </div>
</template>

<script>
import includes from 'lodash/includes'
import toastVariants from '../../constants/statusVariants'
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Stack from '../Stack/index'
import ToastButton from './ToastButton'
import Typography from '../Typography/index'

export default {
  components: {
    Box,
    Column,
    Columns,
    Icon,
    Stack,
    ToastButton,
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
    onCloseToast: {
      default: undefined,
      type: Function,
    },
    variant: {
      default: 'info',
      type: String,
      validator: getIsVariantValid,
    },
  },
  computed: {
    icon() {
      return this.variant === 'success' ? 'checkmark' : this.variant
    },
  },
}

function getIsVariantValid(value) {
  const isValid = includes(toastVariants, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Button: The "variant" prop must be one of the following:',
      String(toastVariants),
    )
  }

  return isValid
}
</script>

<style scoped>
.toast {
  @apply rounded;
}
</style>
