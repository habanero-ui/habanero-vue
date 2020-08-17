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
import forEach from 'lodash/forEach'
import map from 'lodash/map'

import PropValidation from '../../mixins/PropValidation'
import Column from '../Column/index'
import Columns from '../Columns/index'
import BreadcrumbItem from './BreadcrumbsItem'

export default {
  components: { BreadcrumbItem, Column, Columns },
  mixins: [
    PropValidation({
      items: validateItems,
    }),
  ],
  props: {
    /**
     * An array of objects that describe the list of breadcrumbs to display. Every item should have a `text` key. An optional `href` key is also supported.
     */
    items: {
      default: () => [],
      type: Array,
    },
    /**
     * A callback that will be invoked when a Breadcrumb Item is pressed. The first param is the object from `items` corresponding to the pressed Breadcrumb Item.
     */
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

function validateItems(data) {
  let isValid = true

  forEach(data, (item) => {
    if (!item.text) {
      isValid = false
    }
  })

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Breadcrumbs: Each array item in the "items" prop must have a "text" key.',
    )
  }
}
</script>

<style scoped>
.breadcrumbs {
  @apply flex self-start whitespace-no-wrap;
}
.breadcrumbs__separator {
  @apply bg-subtle rounded-full;
  height: 0.375rem;
  width: 0.375rem;
}
</style>
