<template>
  <div class="tooltip" :tabIndex="0">
    <div :aria-describedby="`habanero-tooltip-${id}`" class="tooltip__target">
      <slot />
    </div>
    <div :id="`habanero-tooltip-${id}`" ref="content" class="tooltip__content">
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

import tooltipPlacements from '../../constants/tooltipPlacements'
import tooltipTriggers from '../../constants/tooltipTriggers'
import PropValidation from '../../mixins/PropValidation'
import Box from '../Box/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Typography },
  mixins: [
    PropValidation({
      trigger: tooltipTriggers,
      placement: tooltipPlacements,
    }),
  ],
  props: {
    isContentInteractive: {
      default: false,
      type: Boolean,
    },
    placement: {
      default: 'top',
      type: String,
    },
    text: {
      default: '',
      type: String,
    },
    trigger: {
      default: 'mouseenter focus',
      type: String,
    },
  },
  data: () => ({
    id: uniqueId(),
    tippy: undefined,
  }),
  watch: {
    isContentInteractive() {
      this.tippy.setProps({
        interactive: this.isContentInteractive,
      })
    },

    placement() {
      this.tippy.setProps({
        placement: this.placement,
      })
    },

    trigger() {
      this.tippy.setProps({
        trigger: this.trigger,
      })
    },
  },
  mounted() {
    this.tippy = tippy(this.$el, {
      appendTo: document.body,
      arrow: roundArrow + roundArrow,
      content: this.$refs.content,
      interactive: this.isContentInteractive,
      placement: this.placement,
      theme: 'habanero-tooltip',
      trigger: this.trigger,
    })
  },
}
</script>

<style>
@import '~tippy.js/dist/tippy.css';
@import '~tippy.js/dist/svg-arrow.css';
@import '~tippy.js/dist/border.css';

.tooltip[tabindex='0'] {
  @apply outline-none;
}
.tippy-box[data-theme~='habanero-tooltip'] {
  @apply bg-offwhite text-black p-0 border border-solid border-border;
}
.tippy-box[data-theme~='habanero-tooltip'] .tippy-content {
  @apply p-0;
}
.tippy-box[data-theme~='habanero-tooltip']
  > .tippy-svg-arrow
  > svg:first-child {
  fill: theme('colors.border');
}
.tippy-box[data-theme~='habanero-tooltip'] > .tippy-svg-arrow > svg:last-child {
  fill: theme('colors.offwhite');
}
</style>
