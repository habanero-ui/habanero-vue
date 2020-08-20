<template>
  <dl>
    <DefinitionListItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </dl>
</template>

<script>
import forEach from 'lodash/forEach'

import PropValidation from '../../mixins/PropValidation'
import DefinitionListItem from './DefinitionListItem'

export default {
  components: { DefinitionListItem },
  mixins: [
    PropValidation({
      items: validateItems,
    }),
  ],
  props: {
    items: {
      default: () => [],
      type: Array,
    },
  },
}

function validateItems(data) {
  let isValid = true

  forEach(data, (item) => {
    if (!item.term && !item.description) {
      isValid = false
    }
  })

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'DefinitionList: Each array item in the "items" prop must have a "term" and "description" key.',
    )
  }
}
</script>
