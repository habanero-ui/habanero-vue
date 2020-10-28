<script>
import includes from 'lodash/includes'
import isArray from 'lodash/isArray'
import map from 'lodash/map'

import breakpoints from '../../constants/breakpoints'
import verticalAlignments from '../../constants/verticalAlignments'
import PropValidation from '../../mixins/PropValidation'
import WithScreenSize from '../../mixins/WithScreenSize'
import Box from '../Box/index'

export default {
  mixins: [
    PropValidation({
      alignY: verticalAlignments,
      collapseBelow: breakpoints,
    }),
    WithScreenSize,
  ],
  props: {
    alignY: {
      default: 'top',
      type: String,
    },
    collapseBelow: {
      default: undefined,
      type: String,
    },
    isReversed: {
      default: false,
      type: Boolean,
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
        { 'columns--is-reversed': this.isReversed },
        `columns--align-y-${this.alignY}`,
        this.collapseBelow
          ? `columns--collapse-below-${this.collapseBelow}`
          : undefined,
      ]
    },

    columnPaddingBottom() {
      if (!this.isReversed) {
        return ''
      }

      if (
        (this.collapseBelow === 'tablet' &&
          this.ScreenSize.type === 'mobile') ||
        (this.collapseBelow === 'desktop' &&
          includes(['mobile', 'tablet'], this.ScreenSize.type))
      ) {
        return this.space
      }

      return ''
    },

    columnPaddingLeft() {
      if (this.isReversed) {
        return ''
      }

      if (
        (this.collapseBelow === 'tablet' &&
          this.ScreenSize.type === 'mobile') ||
        (this.collapseBelow === 'desktop' &&
          includes(['mobile', 'tablet'], this.ScreenSize.type))
      ) {
        return ''
      }

      return this.space
    },

    columnPaddingRight() {
      if (!this.isReversed) {
        return ''
      }

      if (
        (this.collapseBelow === 'tablet' &&
          this.ScreenSize.type === 'mobile') ||
        (this.collapseBelow === 'desktop' &&
          includes(['mobile', 'tablet'], this.ScreenSize.type))
      ) {
        return ''
      }

      return this.space
    },

    columnPaddingTop() {
      if (this.isReversed) {
        return ''
      }

      if (
        (this.collapseBelow === 'tablet' &&
          this.ScreenSize.type === 'mobile') ||
        (this.collapseBelow === 'desktop' &&
          includes(['mobile', 'tablet'], this.ScreenSize.type))
      ) {
        return this.space
      }

      return ''
    },
  },
  watch: {
    collapseBelow() {
      if (this.collapseBelow) {
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
    if (isArray(this.space)) {
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
}
.columns__column {
  @apply flex;
}
.columns__column-content {
  @apply flex flex-grow;
}
.columns.columns--is-reversed {
  @apply flex-row-reverse;
}
.columns.columns--align-y-bottom {
  @apply items-end;
}
.columns.columns--align-y-center {
  @apply items-center;
}
.columns.columns--align-y-stretch {
  @apply items-stretch;
}
.columns.columns--align-y-top {
  @apply items-start;
}
.columns.columns--align-y-bottom > .columns__column {
  @apply items-end;
}
.columns.columns--align-y-center > .columns__column {
  @apply items-center;
}
.columns.columns--align-y-stretch > .columns__column {
  @apply items-stretch;
}
.columns.columns--align-y-top > .columns__column {
  @apply items-start;
}
.columns.columns--align-y-bottom > .columns__column > .columns__column-content {
  @apply items-end;
}
.columns.columns--align-y-center > .columns__column > .columns__column-content {
  @apply items-center;
}
.columns.columns--align-y-stretch
  > .columns__column
  > .columns__column-content {
  @apply items-stretch;
}
.columns.columns--align-y-top > .columns__column > .columns__column-content {
  @apply items-start;
}
.columns.columns--align-y-bottom
  > .columns__column
  > .columns__column-content
  > .column {
  @apply items-end;
}
.columns.columns--align-y-center
  > .columns__column
  > .columns__column-content
  > .column {
  @apply items-center;
}
.columns.columns--align-y-stretch
  > .columns__column
  > .columns__column-content
  > .column {
  @apply items-stretch;
}
.columns.columns--align-y-top
  > .columns__column
  > .columns__column-content
  > .column {
  @apply items-start;
}
@media only screen and (max-width: theme('screens.sm')) {
  .columns.columns--collapse-below-tablet {
    @apply flex-col;
  }
  .columns.columns--collapse-below-tablet.columns.columns--is-reversed {
    @apply flex-col-reverse;
  }
}
@media only screen and (max-width: theme('screens.lg')) {
  .columns.columns--collapse-below-desktop {
    @apply flex-col;
  }
  .columns.columns--collapse-below-desktop.columns.columns--is-reversed {
    @apply flex-col-reverse;
  }
}
</style>
