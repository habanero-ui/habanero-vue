<template>
  <div class="box" :style="styles">
    <slot />
  </div>
</template>

<script>
import isNil from 'lodash/isNil'

export default {
  props: {
    padding: {
      default: undefined,
      type: [Number, String],
    },
    paddingBottom: {
      default: undefined,
      type: [Number, String],
    },
    paddingLeft: {
      default: undefined,
      type: [Number, String],
    },
    paddingRight: {
      default: undefined,
      type: [Number, String],
    },
    paddingTop: {
      default: undefined,
      type: [Number, String],
    },
    paddingX: {
      default: undefined,
      type: [Number, String],
    },
    paddingY: {
      default: undefined,
      type: [Number, String],
    },
  },
  data: () => ({
    isKeyDown: false,
  }),
  computed: {
    styles() {
      const toSpace = (value) => (!isNil(value) ? `${(value * 4) / 16}rem` : '')

      return {
        padding: toSpace(this.padding),
        paddingBottom: toSpace(
          !isNil(this.paddingBottom) ? this.paddingBottom : this.paddingY,
        ),
        paddingLeft: toSpace(
          !isNil(this.paddingLeft) ? this.paddingLeft : this.paddingX,
        ),
        paddingRight: toSpace(
          !isNil(this.paddingRight) ? this.paddingRight : this.paddingX,
        ),
        paddingTop: toSpace(
          !isNil(this.paddingTop) ? this.paddingTop : this.paddingY,
        ),
      }
    },
  },
}
</script>
