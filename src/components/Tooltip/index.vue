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
import includes from 'lodash/includes'
import uniqueId from 'lodash/uniqueId'
import tippy, { roundArrow } from 'tippy.js'

import placements from '../../constants/tooltipPlacements'
import Box from '../Box/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Typography },
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    },
    placement: {
      default: 'top',
      type: String,
      validator: getIsPlacementValid,
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
      placement: this.placement,
      showOnCreate: true,
      theme: 'habanero',
    })
  },
}

function getIsPlacementValid(value) {
  const isValid = includes(placements, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Tooltip: The "placement" prop must be one of the following:',
      String(placements),
    )
  }

  return isValid
}
</script>

<style>
@import '~tippy.js/dist/tippy.css';
@import '~tippy.js/dist/svg-arrow.css';
@import '~tippy.js/dist/border.css';

.tooltip[tabindex='0'] {
  @apply outline-none;
}
.tippy-box[data-theme~='habanero'] {
  @apply bg-offwhite p-0 border border-solid border-border;
  color: inherit;
}
.tippy-box[data-theme~='habanero'] .tippy-content {
  @apply p-0;
}
.tippy-box[data-theme~='habanero'] > .tippy-svg-arrow > svg:first-child {
  fill: theme('colors.border');
}
.tippy-box[data-theme~='habanero'] > .tippy-svg-arrow > svg:last-child {
  fill: theme('colors.offwhite');
}
/* .tippy-box[data-theme~='habanero'][data-placement^='top']
  > .tippy-arrow::before {
  border-top-color: theme('colors.offwhite');
}
.tippy-box[data-theme~='habanero'][data-placement^='bottom']
  > .tippy-arrow::before {
  border-bottom-color: theme('colors.offwhite');
}
.tippy-box[data-theme~='habanero'][data-placement^='left']
  > .tippy-arrow::before {
  border-left-color: theme('colors.offwhite');
}
.tippy-box[data-theme~='habanero'][data-placement^='right']
  > .tippy-arrow::before {
  border-right-color: theme('colors.offwhite');
} */
</style>
