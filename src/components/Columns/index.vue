<script>
import includes from 'lodash/includes'
import map from 'lodash/map'
import spacingAliases from '../../constants/spacingAliases'
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
              props: {
                [`padding${this.isReversed ? 'Right' : 'Left'}`]:
                  index > 0 ? this.space : '',
              },
            },
            [vnode],
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
  const isValid = includes(['bottom', 'center', 'top'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Column: The "width" prop must be one of the following:',
      String(['bottom', 'center', 'top']),
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
.columns.columns--is-reversed {
  @apply flex-row-reverse;
}
.columns.columns--align-y-bottom {
  @apply items-end;
}
.columns.columns--align-y-center {
  @apply items-center;
}
.columns.columns--align-y-top {
  @apply items-start;
}
</style>
