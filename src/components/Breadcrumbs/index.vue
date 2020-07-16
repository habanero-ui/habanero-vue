<template>
  <Columns alignY="center" class="breadcrumbs" space="medium">
    <Column v-for="(item, index) in itemsWithSeparators" :key="index">
      <div v-if="item.IS_SEPARATOR" class="breadcrumbs__separator" />
      <BreadcrumbItem
        v-else
        :isLast="index === itemsWithSeparators.length - 1"
        :item="item"
        :onSelect="onItemSelect"
      />
    </Column>
  </Columns>
</template>

<script>
import flatten from 'lodash/flatten'
import map from 'lodash/map'

import Column from '../Column/index'
import Columns from '../Columns/index'
import BreadcrumbItem from './BreadcrumbsItem'

export default {
  components: { BreadcrumbItem, Column, Columns },
  props: {
    items: {
      default: () => [],
      type: Array,
    },
    onItemSelect: {
      default: () => {},
      type: Function,
    },
  },
  computed: {
    itemsWithSeparators() {
      return flatten(
        map(this.items, (item, index) => [
          ...(index > 0 ? [{ IS_SEPARATOR: true }] : []),
          item,
        ]),
      )
    },
  },
}
</script>

<style scoped>
.breadcrumbs {
  @apply flex;
}
.breadcrumbs__separator {
  @apply bg-subtle rounded-full;
  height: 0.375rem;
  width: 0.375rem;
}
</style>
