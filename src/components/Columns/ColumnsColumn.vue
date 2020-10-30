<template>
  <div :class="classes" :style="style">
    <slot />
  </div>
</template>

<script>
import includes from 'lodash/includes'
import map from 'lodash/map'

export default {
  props: {
    align: {
      required: true,
      type: String,
    },
    alignY: {
      required: true,
      type: String,
    },
    isCollapsed: {
      required: true,
      type: Boolean,
    },
    width: {
      required: true,
      type: String,
    },
  },
  computed: {
    classes() {
      return [
        'columns-column',
        { 'columns-column--is-collapsed': this.isCollapsed },
        `columns-column--align-${this.align}`,
        `columns-column--align-y-${this.alignY}`,
      ]
    },

    style() {
      if (includes(this.width, '/')) {
        const dividendAndDivisor = map(this.width.split('/'), parseFloat)
        const percent = (dividendAndDivisor[0] / dividendAndDivisor[1]) * 100
        return { flex: `0 0 ${percent}%` }
      }

      if (this.width === 'content') {
        return { 'flex-shrink': 0 }
      }

      return { width: '100%' }
    },
  },
}
</script>

<style scoped>
.columns-column {
  @apply flex;
  &.columns-column--is-collapsed {
    &.columns-column--align-center {
      @apply items-center;
    }
    &.columns-column--align-left {
      @apply items-start;
    }
    &.columns-column--align-right {
      @apply items-end;
    }
    &.columns-column--align-stretch {
      @apply items-stretch;
    }
  }
  &:not(.columns-column--is-collapsed) {
    &.columns-column--align-y-bottom {
      @apply items-end;
    }
    &.columns-column--align-y-center {
      @apply items-center;
    }
    &.columns-column--align-y-stretch {
      @apply items-stretch;
    }
    &.columns-column--align-y-top {
      @apply items-start;
    }
  }
}
</style>
