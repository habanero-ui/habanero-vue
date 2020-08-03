<template>
  <Box
    :backgroundColor="color"
    class="badge"
    :paddingX="text ? 'xsmall' : 'xxsmall'"
    paddingY="xxsmall"
  >
    <Typography
      v-if="text"
      class="badge__text"
      :colorIsBackground="true"
      :color="color"
      variant="body-extra-small"
    >
      {{ text }}
    </Typography>
  </Box>
</template>

<script>
import includes from 'lodash/includes'

import colors from '../../constants/colors'
import Box from '../Box/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Typography },
  props: {
    color: {
      default: 'black',
      type: String,
      validator: getIsColorValid,
    },
    text: {
      default: '',
      type: [Number, String],
    },
  },
}

function getIsColorValid(value) {
  const isValid = includes(colors, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Badge: The "color" prop must be one of the following:',
      String(colors),
    )
  }

  return isValid
}
</script>

<style scoped>
.badge {
  @apply flex-none rounded-full;
}
.badge__text {
  @apply block;
}
</style>
