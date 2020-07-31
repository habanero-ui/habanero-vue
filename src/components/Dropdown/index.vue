<template>
  <div class="dropdown" :tabIndex="0">
    <div :aria-describedby="`habanero-dropdown-${id}`" class="dropdown__target">
      <slot />
    </div>
    <div
      :id="`habanero-dropdown-${id}`"
      ref="content"
      class="dropdown__content"
    >
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
import tippy, { roundArrow } from 'tippy.js'

import Box from '../Box/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Typography },
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    },
    text: {
      default: '',
      type: String,
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
      arrow: roundArrow + roundArrow,
      content: this.$refs.content,
      interactive: true,
      placement: 'bottom-end',
      theme: 'habanero-dropdown',
      trigger: 'click',
    })
  },
}
</script>

<style>
@import '~tippy.js/dist/tippy.css';
@import '~tippy.js/dist/svg-arrow.css';
@import '~tippy.js/dist/border.css';

.dropdown[tabindex='0'] {
  @apply outline-none;
}
.tippy-box[data-theme~='habanero-dropdown'] {
  @apply bg-white text-black p-0 border border-solid border-border;
}
.tippy-box[data-theme~='habanero-dropdown'] .tippy-content {
  @apply p-0;
}
.tippy-box[data-theme~='habanero-dropdown']
  > .tippy-svg-arrow
  > svg:first-child {
  fill: theme('colors.border');
}
.tippy-box[data-theme~='habanero-dropdown']
  > .tippy-svg-arrow
  > svg:last-child {
  fill: theme('colors.white');
}
</style>
