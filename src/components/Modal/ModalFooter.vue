<template>
  <footer class="modal-footer">
    <Box paddingX="gutter">
      <Columns space="medium">
        <Column v-if="isWide" />
        <Column v-if="onCancel" :width="buttonColumnWidth">
          <Button
            :disabled="isCancelDisabled"
            :text="cancelText"
            variant="secondary"
            @click.native="onCancel"
          />
        </Column>
        <Column v-if="onConfirm" :width="buttonColumnWidth">
          <Button
            :color="confirmColor"
            :disabled="isConfirmDisabled"
            :isLoading="isConfirmLoading"
            :text="confirmText"
            @click.native="onConfirm"
          />
        </Column>
      </Columns>
    </Box>
  </footer>
</template>

<script>
import throttle from 'lodash/throttle'

import Box from '../Box/index'
import Button from '../Button/index'
import Column from '../Column/index'
import Columns from '../Columns/index'

export default {
  components: {
    Box,
    Button,
    Column,
    Columns,
  },
  props: {
    cancelText: {
      default: 'Cancel',
      type: String,
    },
    confirmColor: {
      default: undefined,
      type: String,
    },
    confirmText: {
      default: 'Confirm',
      type: String,
    },
    isCancelDisabled: {
      default: false,
      type: Boolean,
    },
    isConfirmDisabled: {
      default: false,
      type: Boolean,
    },
    isConfirmLoading: {
      default: false,
      type: Boolean,
    },
    onCancel: {
      default: undefined,
      type: Function,
    },
    onConfirm: {
      default: undefined,
      type: Function,
    },
  },
  data: () => ({
    isWide: false,
    throttledWindowResizeListener: undefined,
  }),
  computed: {
    buttonColumnWidth() {
      return this.isWide ? 'content' : 'fluid'
    },
  },
  mounted() {
    this.handleWindowResize()

    this.throttledWindowResizeListener = throttle(this.handleWindowResize, 16)

    window.addEventListener('resize', this.throttledWindowResizeListener)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.throttledWindowResizeListener)
  },
  methods: {
    handleWindowResize() {
      this.isWide = this.$el.offsetWidth > 384
    },
  },
}
</script>
