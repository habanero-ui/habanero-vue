<script>
import includes from 'lodash/includes'
import isArray from 'lodash/isArray'

import breakpoints from '../../constants/breakpoints'
import stackAlignments from '../../constants/stackAlignments'
import verticalAlignments from '../../constants/verticalAlignments'
import getResponsivePropValue from '../../helpers/getResponsivePropValue'
import PropValidation from '../../mixins/PropValidation'
import WithScreenSize from '../../mixins/WithScreenSize'
import ColumnsColumn from './ColumnsColumn'
import ColumnsColumnContent from './ColumnsColumnContent'

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
        {
          'columns--is-collapsed': this.isCollapsed,
          'columns--is-reversed': this.responsiveIsReversed,
        },
        `columns--align-${this.align}`,
        `columns--align-y-${this.alignY}`,
      ]
    },

    isCollapsed() {
      return (
        (this.collapseBelow === 'tablet' &&
          this.ScreenSize.type === 'mobile') ||
        (this.collapseBelow === 'desktop' &&
          includes(['mobile', 'tablet'], this.ScreenSize.type)) ||
        (this.collapseAbove === 'tablet' &&
          includes(['desktop', 'tablet'], this.ScreenSize.type)) ||
        (this.collapseAbove === 'desktop' && this.ScreenSize.type === 'desktop')
      )
    },

    responsiveIsReversed() {
      return getResponsivePropValue(this.isReversed, this.ScreenSize.type)
    },
  },
  watch: {
    collapseAbove() {
      if (this.collapseAbove) {
        this.ScreenSize.startWatching()
      }
    },

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
      if (isArray(this.space)) {
        this.ScreenSize.startWatching()
      }
    },
  },
  mounted() {
    if (
      this.collapseAbove ||
      this.collapseBelow ||
      isArray(this.isReversed) ||
      isArray(this.space)
    ) {
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
        ColumnsColumn,
        {
          props: {
            align: this.align,
            alignY: this.alignY,
            isCollapsed: this.isCollapsed,
            width,
          },
        },
        [
          h(
            ColumnsColumnContent,
            {
              props: {
                align: this.align,
                alignY: this.alignY,
                isCollapsed: this.isCollapsed,
                isReversed: this.responsiveIsReversed,
                space: this.space,
                index,
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
</script>

<style scoped>
.columns {
  @apply flex;
  &.columns--is-reversed {
    @apply flex-row-reverse;
  }
  &.columns--is-collapsed {
    @apply flex-col;
    &.columns--is-reversed {
      @apply flex-col-reverse;
    }
    &.columns--align-center {
      @apply items-center;
    }
    &.columns--align-left {
      @apply items-start;
    }
    &.columns--align-right {
      @apply items-end;
    }
    &.columns--align-stretch {
      @apply items-stretch;
    }
  }
  &:not(.columns--is-collapsed) {
    &.columns--align-y-bottom {
      @apply items-end;
    }
    &.columns--align-y-center {
      @apply items-center;
    }
    &.columns--align-y-stretch {
      @apply items-stretch;
    }
    &.columns--align-y-top {
      @apply items-start;
    }
  }
}
</style>
