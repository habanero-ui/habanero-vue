<template>
  <div>
    <button
      ref="button"
      aria-describedby="tooltip"
      @blur="hide"
      @focus="show"
      @mouseenter="show"
      @mouseleave="hide"
    >
      I'm a button
    </button>
    <div id="tooltip" ref="tooltip" class="tooltip" role="tooltip">
      I'm a tooltip
      <div id="arrow" data-popper-arrow></div>
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
      this.popper = createPopper(this.$refs.button, this.$refs.tooltip, {
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
#tooltip {
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  display: none;
}
#tooltip[data-show] {
  display: block;
}
#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  z-index: -1;
}
#arrow::before {
  content: '';
  transform: rotate(45deg);
  background: #333;
}
#tooltip[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

#tooltip[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^='right'] > #arrow {
  left: -4px;
}
</style>
