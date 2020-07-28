<template>
  <div class="tooltip">
    <div ref="tooltip" class="tooltip__tip" role="tooltip">
      <slot name="tooltip" />
      <div class="tooltip__arrow" data-popper-arrow></div>
    </div>
    <div
      ref="target"
      aria-describedby="tooltip"
      class="tooltip__target"
      @blur="hide"
      @focus="show"
      @mouseenter="show"
      @mouseleave="hide"
    >
      <slot name="target" />
    </div>
  </div>
</template>

<script>
import { createPopper } from '@popperjs/core'
import includes from 'lodash/includes'

import placements from '../../constants/tooltipPlacements'

export default {
  components: {},
  props: {
    placement: {
      default: 'top',
      type: String,
      validator: getIsPlacementValid,
    },
  },
  data: () => ({
    popper: null,
  }),
  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy()
      this.popper = null
    }
  },
  mounted() {
    this.updatePopper()
  },
  methods: {
    show() {
      this.$refs.tooltip.setAttribute('data-show', '')
    },

    hide() {
      this.$refs.tooltip.removeAttribute('data-show')
    },

    updatePopper() {
      this.popper = createPopper(this.$refs.target, this.$refs.tooltip, {
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
        ],
        placement: this.placement,
      })
    },
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

<style scoped>
.tooltip__target {
  @apply inline-block;
}

.tooltip__tip {
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  display: none;
}
.tooltip__tip[data-show] {
  display: block;
}
.tooltip__arrow,
.tooltip__arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  z-index: -1;
}
.tooltip__arrow::before {
  content: '';
  transform: rotate(45deg);
  background: #333;
}
.tooltip__tip[data-popper-placement^='top'] > .tooltip__arrow {
  bottom: -4px;
}

.tooltip__tip[data-popper-placement^='bottom'] > .tooltip__arrow {
  top: -4px;
}

.tooltip__tip[data-popper-placement^='left'] > .tooltip__arrow {
  right: -4px;
}

.tooltip__tip[data-popper-placement^='right'] > .tooltip__arrow {
  left: -4px;
}
</style>
