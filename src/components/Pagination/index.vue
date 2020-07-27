<template>
  <Columns alignY="center" class="pagination" space="medium">
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
    <Column>
      <Typography color="subtle">
        Showing {{ pageStart }} - {{ pageEnd }} of {{ itemCount }} items
      </Typography>
    </Column>
  </Columns>
</template>

<script>
import clamp from 'lodash/clamp'

import Button from '../Button/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Typography from '../Typography/index'

export default {
  components: { Button, Column, Columns, Typography },
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
      return Math.ceil(this.itemCount / this.itemsPerPage)
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
