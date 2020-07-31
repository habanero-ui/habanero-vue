<template>
  <div class="menu" :tabIndex="0">
    <div :aria-describedby="`habanero-menu-${id}`" class="menu__target">
      <slot />
    </div>
    <div :id="`habanero-menu-${id}`" ref="content" class="menu__content">
      <slot name="content">
        <Box padding="xsmall">
          <Typography class="block" variant="body-extra-small">
            {{ text }}
          </Typography>
        </Box>
      </slot>
    </div>
  </div>
</template>

<script>
import uniqueId from 'lodash/uniqueId'
import tippy from 'tippy.js'

import Box from '../Box/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Typography },
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
      arrow: false,
      content: this.$refs.content,
      interactive: true,
      placement: 'bottom-end',
      theme: 'habanero-menu',
      trigger: 'click',
    })
  },
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
