<script>
import includes from 'lodash/includes'
import map from 'lodash/map'
import spacingAliases from '../../constants/spacingAliases'
import verticalAlignments from '../../constants/verticalAlignments'
import Box from '../Box/index'

export default {
  props: {
    alignY: {
      default: 'top',
      type: String,
      validator: getIsAlignYValid,
    },
    isReversed: {
      default: false,
      type: Boolean,
    },
    space: {
      default: '',
      type: [Number, String],
      validator: getIsSpaceValid,
    },
  },
  computed: {
    classes() {
      return [
        'columns',
        { 'columns--is-reversed': this.isReversed },
        `columns--align-y-${this.alignY}`,
      ]
    },

    columnStyle() {
      const paddingSide = this.isReversed ? 'right' : 'left'

      return `padding-${paddingSide}: ${(parseFloat(this.space) * 4) / 16}rem;`
    },
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
                [`padding${this.isReversed ? 'Right' : 'Left'}`]:
                  index > 0 ? this.space : '',
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

function getIsAlignYValid(value) {
  const isValid = includes(verticalAlignments, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Column: The "alignY" prop must be one of the following:',
      String(verticalAlignments),
    )
  }

  return isValid
}

function getIsSpaceValid(value) {
  const isValid =
    includes(['', ...spacingAliases], value) || !isNaN(parseFloat(value))

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      `Columns: The "space" prop must be a number to be multiplied by 4, or one of the following aliases:`,
      String(spacingAliases),
    )
  }

  return isValid
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
</style>
