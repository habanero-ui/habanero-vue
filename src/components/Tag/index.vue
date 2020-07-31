<template>
  <Box
    backgroundColor="border"
    class="tag"
    paddingX="small"
    :paddingY="onDelete ? '0.5' : '1.75'"
  >
    <Columns alignY="center" space="xxsmall">
      <Column>
        <Typography
          color="border"
          :colorIsBackground="true"
          variant="label-small"
        >
          {{ truncatedText }}
        </Typography>
      </Column>
      <Column v-if="onDelete" width="content">
        <Box
          class="tag__delete-button"
          showInteractionOverlay
          @click.native="handleDeleteButtonClick"
        >
          <Icon name="close" />
        </Box>
      </Column>
    </Columns>
  </Box>
</template>

<script>
import truncate from 'lodash/truncate'

import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Column, Columns, Icon, Typography },
  props: {
    maxChars: {
      default: Infinity,
      type: Number,
    },
    onDelete: {
      default: undefined,
      type: Function,
    },
    text: {
      default: '',
      type: String,
    },
    value: {
      default: '',
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
    },
  },
  computed: {
    truncatedText() {
      return truncate(this.text || this.value, {
        length: this.maxChars,
        omission: '…',
      })
    },
  },
  methods: {
    handleDeleteButtonClick(e) {
      if (!this.onDelete) return

      this.onDelete(this.value, e)
    },
  },
}
</script>

<style scoped>
.tag {
  @apply inline-flex rounded-md;
}
.tag__delete-button {
  @apply -mr-1 rounded-full;
}
.tag__delete-button::after {
  @apply rounded-full;
}
</style>
