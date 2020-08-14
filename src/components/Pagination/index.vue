<template>
  <Box marginLeft="-small">
    <Columns alignY="center" space="gutter">
      <Column width="content">
        <Columns alignY="center" space="xsmall">
          <Column width="content">
            <Button
              :disabled="isPreviousButtonDisabled"
              iconName="chevron-left"
              iconSize="large"
              variant="text"
              @click.native="handlePreviousButtonClick"
            />
          </Column>
          <Column width="content">
            <Typography>Page {{ selectedPage }} / {{ pageCount }}</Typography>
          </Column>
          <Column width="content">
            <Button
              :disabled="isNextButtonDisabled"
              iconName="chevron-right"
              iconSize="large"
              variant="text"
              @click.native="handleNextButtonClick"
            />
          </Column>
        </Columns>
      </Column>
      <Column>
        <Typography color="subtle">{{ showing }}</Typography>
      </Column>
    </Columns>
  </Box>
</template>

<script>
import clamp from 'lodash/clamp'

import Box from '../Box/index'
import Button from '../Button/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Button, Column, Columns, Typography },
  props: {
    itemCount: {
      default: 1,
      type: Number,
    },
    itemsPerPage: {
      default: 1,
      type: Number,
    },
    onSelectedPageChange: {
      default: undefined,
      type: Function,
    },
    selectedPage: {
      default: 1,
      type: Number,
    },
  },
  computed: {
    isNextButtonDisabled() {
      return this.selectedPage === this.pageCount
    },

    isPreviousButtonDisabled() {
      return this.selectedPage === 1
    },

    pageCount() {
      return this.itemCount ? Math.ceil(this.itemCount / this.itemsPerPage) : 1
    },

    pageEnd() {
      return clamp(this.pageStart + this.itemsPerPage - 1, 1, this.itemCount)
    },

    pageStart() {
      return clamp(
        (this.selectedPage - 1) * this.itemsPerPage + 1,
        1,
        this.itemCount,
      )
    },

    showing() {
      return this.itemCount
        ? `Showing ${this.pageStart} - ${this.pageEnd} of ${this.itemCount} items`
        : `Showing ${this.itemCount} items`
    },
  },
  methods: {
    handleNextButtonClick() {
      if (!this.onSelectedPageChange) return

      this.onSelectedPageChange(this.selectedPage + 1)
    },

    handlePreviousButtonClick() {
      if (!this.onSelectedPageChange) return

      this.onSelectedPageChange(this.selectedPage - 1)
    },
  },
}
</script>
