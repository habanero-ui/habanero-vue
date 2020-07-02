<template>
  <Box
    backgroundColor="border"
    :class="classes"
    paddingX="small"
    :paddingY="onDelete ? 'xxsmall' : 2.25"
  >
    <Columns alignY="center" space="xxsmall">
      <Column>
        <Typography
          :colorIsBackground="true"
          color="border"
          variant="label-small"
        >
          {{ truncatedText }}
        </Typography>
      </Column>
      <Column v-if="onDelete" width="content">
        <div class="tag__delete-button" @click="handleDeleteButtonClick">
          <Icon name="close" />
        </div>
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
    classes() {
      return ['tag']
    },

    truncatedText() {
      return truncate(this.text || this.value, {
        length: this.maxChars,
        omission: '…',
      })
    },
  },
  methods: {
    handleDeleteButtonClick() {
      if (!this.onDelete) return

      this.onDelete(this.value)
    },
  },
}
</script>

<style scoped>
.tag {
  @apply inline-flex rounded-md;
}
.tag__delete-button {
  @apply relative cursor-pointer -mr-1 rounded-full;
}
.tag__delete-button::after {
  @apply absolute inset-0 pointer-events-none opacity-0 rounded-full transition-opacity duration-100 ease-in-out;
  background-color: black;
  content: '';
}
.tag__delete-button:hover::after {
  opacity: 0.1;
}
.tag__delete-button:active::after {
  opacity: 0.25;
}
</style>
