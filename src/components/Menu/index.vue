<template>
  <div class="menu" :tabIndex="0">
    <div :aria-describedby="`habanero-menu-${id}`" class="menu__target">
      <slot />
    </div>
    <div :id="`habanero-menu-${id}`" ref="content" class="menu__content">
      <Stack :showDividers="true">
        <ListItem
          v-for="item in items"
          :key="item.text"
          :iconName="item.icon"
          :primaryText="item.text"
          @click.native="handleItemClick(item, $event)"
        />
      </Stack>
    </div>
  </div>
</template>

<script>
import forEach from 'lodash/forEach'
import uniqueId from 'lodash/uniqueId'
import tippy from 'tippy.js'

import PropValidation from '../../mixins/PropValidation'
import ListItem from '../ListItem/index'
import Stack from '../Stack/index'

export default {
  components: { ListItem, Stack },
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
  data: () => ({
    id: uniqueId(),
    tippy: undefined,
  }),
  watch: {
    placement() {
      this.tippy.setProps({
        placement: this.placement,
      })
    },
  },
  mounted() {
    this.tippy = tippy(this.$el, {
      appendTo: document.body,
      arrow: false,
      content: this.$refs.content,
      interactive: true,
      placement: 'bottom-end',
      theme: 'habanero-menu',
      trigger: 'click',
    })
  },
  methods: {
    handleItemClick(item, e) {
      if (!item.onClick) return

      item.onClick(e)

      if (!this.tippy) return

      this.tippy.hide()
    },
  },
}

function validateItems(value) {
  let isValid = true

  forEach(value, (item) => {
    if (!item.text) {
      isValid = false
    }
  })

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Menu: Each array item in the "items" prop must have a "text" key.',
    )
  }
}
</script>

<style>
@import '~tippy.js/dist/tippy.css';
@import '~tippy.js/dist/border.css';

.menu[tabindex='0'] {
  @apply outline-none;
}
.tippy-box[data-theme~='habanero-menu'] {
  @apply bg-white text-black p-0 border border-solid border-border;
}
.tippy-box[data-theme~='habanero-menu'] .tippy-content {
  @apply p-0;
}
</style>
