<template>
  <Box
    padding="medium"
    :showInteractionOverlay="column.isSortable"
    @click.native="handleClick"
  >
    <Columns alignY="center" class="flex-none" space="small">
      <Column width="content">
        <Typography
          class="data-table-header-cell__text"
          color="subtle"
          variant="label-small"
        >
          {{ column.name }}
        </Typography>
      </Column>
      <Column width="content">
        <Icon
          v-if="column.isSortable"
          color="subtle"
          :name="sortIconName"
          size="small"
        />
      </Column>
    </Columns>
  </Box>
</template>

<script>
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Icon, Column, Columns, Typography },
  props: {
    column: {
      default: () => ({}),
      type: Object,
    },
    onSortByChange: {
      default: () => {},
      type: Function,
    },
    onSortDirectionChange: {
      default: () => {},
      type: Function,
    },
    sortBy: {
      default: '',
      type: String,
    },
    sortDirection: {
      default: 'asc',
      type: String,
    },
  },
  computed: {
    sortIconName() {
      if (this.sortBy !== this.column.key) {
        return 'sort'
      }

      return this.sortDirection === 'asc' ? 'sort-ascending' : 'sort-descending'
    },
  },
  methods: {
    handleClick() {
      if (!this.column.isSortable) return

      if (this.sortBy !== this.column.key) {
        this.onSortByChange(this.column.key)
        return
      }

      this.onSortDirectionChange(this.sortDirection === 'asc' ? 'desc' : 'asc')
    },
  },
}
</script>

<style scoped>
.data-table-header-cell__text {
  @apply block select-none;
}
</style>
