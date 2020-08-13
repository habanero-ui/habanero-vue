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
import colors from '../../constants/colors'
import PropValidation from '../../mixins/PropValidation'
import Box from '../Box/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Typography },
  mixins: [
    PropValidation({
      color: colors,
    }),
  ],
  props: {
    /**
     * The color for the Badge.
     */
    color: {
      default: 'black',
      type: String,
    },
    /**
     * The text that will be displayed in the Badge.
     */
    text: {
      default: '',
      type: [Number, String],
    },
  },
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
