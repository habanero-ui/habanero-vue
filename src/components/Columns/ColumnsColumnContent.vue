<template>
  <Box
    :class="classes"
    :paddingBottom="paddingBottom"
    :paddingLeft="paddingLeft"
    :paddingRight="paddingRight"
    :paddingTop="paddingTop"
  >
    <slot />
  </Box>
</template>

<script>
import Box from '../Box/index'

export default {
  components: { Box },
  props: {
    align: {
      required: true,
      type: String,
    },
    alignY: {
      required: true,
      type: String,
    },
    index: {
      required: true,
      type: Number,
    },
    isCollapsed: {
      required: true,
      type: Boolean,
    },
    isReversed: {
      required: true,
      type: Boolean,
    },
    space: {
      required: true,
      type: [Array, Number, String],
    },
  },
  computed: {
    classes() {
      return [
        'columns-column-content',
        { 'columns-column-content--is-collapsed': this.isCollapsed },
        `columns-column-content--align-${this.align}`,
        `columns-column-content--align-y-${this.alignY}`,
      ]
    },

    paddingBottom() {
      if (this.index === 0 || !this.isReversed) {
        return ''
      }

      if (this.isCollapsed) {
        return this.space
      }

      return ''
    },

    paddingLeft() {
      if (this.index === 0 || this.isReversed) {
        return ''
      }

      if (this.isCollapsed) {
        return ''
      }

      return this.space
    },

    paddingRight() {
      if (this.index === 0 || !this.isReversed) {
        return ''
      }

      if (this.isCollapsed) {
        return ''
      }

      return this.space
    },

    paddingTop() {
      if (this.index === 0 || this.isReversed) {
        return ''
      }

      if (this.isCollapsed) {
        return this.space
      }

      return ''
    },
  },
}
</script>

<style scoped>
.columns-column-content {
  @apply flex flex-grow;
  &.columns-column-content--is-collapsed {
    &.columns-column-content--align-center {
      @apply items-center;
    }
    &.columns-column-content--align-left {
      @apply items-start;
    }
    &.columns-column-content--align-right {
      @apply items-end;
    }
    &.columns-column-content--align-stretch {
      @apply items-stretch;
    }
  }
  &:not(.columns-column-content--is-collapsed) {
    &.columns-column-content--align-y-bottom {
      @apply items-end;
    }
    &.columns-column-content--align-y-center {
      @apply items-center;
    }
    &.columns-column-content--align-y-stretch {
      @apply items-stretch;
    }
    &.columns-column-content--align-y-top {
      @apply items-start;
    }
  }
}
</style>
