<script>
import includes from 'lodash/includes'
import Box from '../Box/index'
import spacingAliases from '../../constants/spacingAliases'

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
          class: [
            'columns__column',
            `columns__column--width-${width || 'fluid'}`,
          ],
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
      'Column: The "alignY" prop must be one of the following:',
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
.columns__column--width-fluid {
  @apply w-full;
}
.columns__column--width-content {
  @apply flex-shrink-0;
}
.columns__column--width-1\/2 {
  flex: 0 0 50%;
}
.columns__column--width-1\/3 {
  flex: 0 0 33%;
}
.columns__column--width-2\/3 {
  flex: 0 0 67%;
}
.columns__column--width-1\/4 {
  flex: 0 0 25%;
}
.columns__column--width-3\/4 {
  flex: 0 0 75%;
}
.columns__column--width-1\/5 {
  flex: 0 0 20%;
}
.columns__column--width-2\/5 {
  flex: 0 0 40%;
}
.columns__column--width-3\/5 {
  flex: 0 0 60%;
}
.columns__column--width-4\/5 {
  flex: 0 0 80%;
}
</style>
