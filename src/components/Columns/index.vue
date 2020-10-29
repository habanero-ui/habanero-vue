<script>
import includes from 'lodash/includes'
import isArray from 'lodash/isArray'
import map from 'lodash/map'

import breakpoints from '../../constants/breakpoints'
import stackAlignments from '../../constants/stackAlignments'
import verticalAlignments from '../../constants/verticalAlignments'
import getResponsivePropValue from '../../helpers/getResponsivePropValue'
import PropValidation from '../../mixins/PropValidation'
import WithScreenSize from '../../mixins/WithScreenSize'
import Box from '../Box/index'

export default {
  mixins: [
    PropValidation({
      align: stackAlignments,
      alignY: verticalAlignments,
      collapseBelow: breakpoints,
    }),
    WithScreenSize,
  ],
  props: {
    align: {
      default: 'stretch',
      type: String,
    },
    alignY: {
      default: 'top',
      type: String,
    },
    collapseAbove: {
      default: undefined,
      type: String,
    },
    collapseBelow: {
      default: undefined,
      type: String,
    },
    isReversed: {
      default: false,
      type: [Array, Boolean],
    },
    space: {
      default: '',
      type: [Array, Number, String],
    },
  },
  computed: {
    classes() {
      return [
        'columns',
        { 'columns--is-reversed': this.responsiveIsReversed },
        `columns--align-${this.align}`,
        `columns--align-y-${this.alignY}`,
        this.collapseAbove
          ? `columns--collapse-above-${this.collapseAbove}`
          : undefined,
        this.collapseBelow
          ? `columns--collapse-below-${this.collapseBelow}`
          : undefined,
      ]
    },

    columnPaddingBottom() {
      if (!this.responsiveIsReversed) {
        return ''
      }

      if (this.isCollapsed) {
        return this.space
      }

      return ''
    },

    columnPaddingLeft() {
      if (this.responsiveIsReversed) {
        return ''
      }

      if (this.isCollapsed) {
        return ''
      }

      return this.space
    },

    columnPaddingRight() {
      if (!this.responsiveIsReversed) {
        return ''
      }

      if (this.isCollapsed) {
        return ''
      }

      return this.space
    },

    columnPaddingTop() {
      if (this.responsiveIsReversed) {
        return ''
      }

      if (this.isCollapsed) {
        return this.space
      }

      return ''
    },

    isCollapsed() {
      return (
        (this.collapseBelow === 'tablet' &&
          this.ScreenSize.type === 'mobile') ||
        (this.collapseBelow === 'desktop' &&
          includes(['mobile', 'tablet'], this.ScreenSize.type)) ||
        (this.collapseAbove === 'tablet' &&
          includes(['desktop', 'tablet'], this.ScreenSize.type)) ||
        (this.collapseAbove === 'desktop' && this.screenSize === 'desktop')
      )
    },

    responsiveIsReversed() {
      return getResponsivePropValue(this.isReversed, this.ScreenSize.type)
    },
  },
  watch: {
    collapseBelow() {
      if (this.collapseBelow) {
        this.ScreenSize.startWatching()
      }
    },

    isReversed() {
      if (isArray(this.isReversed)) {
        this.ScreenSize.startWatching()
      }
    },

    space() {
      if (isArray(this.collapseBelow)) {
        this.ScreenSize.startWatching()
      }
    },
  },
  mounted() {
    if (this.collapseBelow || isArray(this.isReversed) || isArray(this.space)) {
      this.ScreenSize.startWatching()
    }
  },
  beforeDestroy() {
    this.ScreenSize.stopWatching()
  },
  methods: {
    mapSlotNode(vnode, h, index) {
      const { width } = vnode.componentOptions.propsData

      return h(
        'div',
        {
          class: 'columns__column',
          style: getStylesFromWidth(width),
        },
        [
          h(
            Box,
            {
              class: 'columns__column-content',
              props: {
                paddingBottom: index > 0 ? this.columnPaddingBottom : '',
                paddingLeft: index > 0 ? this.columnPaddingLeft : '',
                paddingRight: index > 0 ? this.columnPaddingRight : '',
                paddingTop: index > 0 ? this.columnPaddingTop : '',
              },
            },
            [vnode.componentOptions.children],
          ),
        ],
      )
    },
  },
  render(h) {
    return h(
      'div',
      {
        class: this.classes,
      },
      this.$slots.default
        ? this.$slots.default
            .filter((vnode) => vnode.tag && vnode.componentOptions)
            .map((vnode, index) => this.mapSlotNode(vnode, h, index))
        : null,
    )
  },
}

function getStylesFromWidth(width) {
  if (includes(width, '/')) {
    const dividendAndDivisor = map(width.split('/'), parseFloat)
    const percent = (dividendAndDivisor[0] / dividendAndDivisor[1]) * 100
    return { flex: `0 0 ${percent}%` }
  }

  if (width === 'content') {
    return { 'flex-shrink': 0 }
  }

  return { width: '100%' }
}
</script>

<style scoped>
.columns {
  @apply flex;
  & .columns__column {
    @apply flex;
  }
  & .columns__column-content {
    @apply flex flex-grow;
  }
  &.columns--is-reversed {
    @apply flex-row-reverse;
  }
  @media screen and (max-width: theme('screens.sm')) {
    &.columns--collapse-below-tablet {
      @apply flex-col;
      &.columns--is-reversed {
        @apply flex-col-reverse;
      }
      &.columns--align-center {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-center;
        }
      }
      &.columns--align-left {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-start;
        }
      }
      &.columns--align-right {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-end;
        }
      }
      &.columns--align-stretch {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-stretch;
        }
      }
    }
    &:not(.columns--collapse-below-tablet, .columns--collapse-below-desktop) {
      &.columns--align-y-bottom {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-end;
        }
      }
      &.columns--align-y-center {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-center;
        }
      }
      &.columns--align-y-stretch {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-stretch;
        }
      }
      &.columns--align-y-top {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-start;
        }
      }
    }
  }
  @media screen and (min-width: calc(theme('screens.sm') + 1px)) {
    &.columns--collapse-above-tablet {
      @apply flex-col;
      &.columns--is-reversed {
        @apply flex-col-reverse;
      }
      &.columns--align-center {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-center;
        }
      }
      &.columns--align-left {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-start;
        }
      }
      &.columns--align-right {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-end;
        }
      }
      &.columns--align-stretch {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-stretch;
        }
      }
    }
    &:not(.columns--collapse-above-tablet) {
      &.columns--align-y-bottom {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-end;
        }
      }
      &.columns--align-y-center {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-center;
        }
      }
      &.columns--align-y-stretch {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-stretch;
        }
      }
      &.columns--align-y-top {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-start;
        }
      }
    }
  }
  @media screen and (max-width: theme('screens.lg')) {
    &.columns--collapse-below-desktop {
      @apply flex-col;
      &.columns--is-reversed {
        @apply flex-col-reverse;
      }
      &.columns--align-center {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-center;
        }
      }
      &.columns--align-left {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-start;
        }
      }
      &.columns--align-right {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-end;
        }
      }
      &.columns--align-stretch {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-stretch;
        }
      }
    }
    &:not(.columns--collapse-below-desktop) {
      &.columns--align-y-bottom {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-end;
        }
      }
      &.columns--align-y-center {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-center;
        }
      }
      &.columns--align-y-stretch {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-stretch;
        }
      }
      &.columns--align-y-top {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-start;
        }
      }
    }
  }
  @media screen and (min-width: calc(theme('screens.lg') + 1px)) {
    &.columns--collapse-above-desktop {
      @apply flex-col;
      &.columns--is-reversed {
        @apply flex-col-reverse;
      }
      &.columns--align-center {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-center;
        }
      }
      &.columns--align-left {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-start;
        }
      }
      &.columns--align-right {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-end;
        }
      }
      &.columns--align-stretch {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-stretch;
        }
      }
    }
    &:not(.columns--collapse-above-desktop, .columns--collapse-above-tablet) {
      &.columns--align-y-bottom {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-end;
        }
      }
      &.columns--align-y-center {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-center;
        }
      }
      &.columns--align-y-stretch {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-stretch;
        }
      }
      &.columns--align-y-top {
        &,
        & > .columns__column,
        & > .columns__column > .columns__column-content {
          @apply items-start;
        }
      }
    }
  }
}
</style>
