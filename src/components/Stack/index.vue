<script>
import filter from 'lodash/filter'
import flatten from 'lodash/flatten'
import includes from 'lodash/includes'
import map from 'lodash/map'
import Box from '../Box/index'
import Divider from '../Divider/index'
import spacingAliases from '../../constants/spacingAliases'

export default {
  props: {
    align: {
      default: 'stretch',
      validator: getIsAlignValid,
    },
    showDividers: {
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
      return ['stack', `stack--align-${this.align}`]
    },
  },
  methods: {
    mapSlotNode(vnode, h, index) {
      return h(
        Box,
        {
          class: 'stack__item',
          props: {
            paddingTop: index > 0 ? this.space : '',
          },
        },
        [vnode],
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
        ? flatten(
            map(
              filter(this.$slots.default, (vnode) => vnode.tag),
              (vnode, index) =>
                this.showDividers && index > 0
                  ? [
                      this.mapSlotNode(
                        h(Divider, { props: { thickness: 'thin' } }),
                        h,
                        index,
                      ),
                      this.mapSlotNode(vnode, h, index),
                    ]
                  : [this.mapSlotNode(vnode, h, index)],
            ),
          )
        : null,
    )
  },
}

function getIsAlignValid(value) {
  const isValid = includes(['center', 'left', 'right', 'stretch'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Stack: The "align" prop must be one of the following when defined:',
      String(['center', 'left', 'right', 'stretch']),
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
      `Stack: The "space" prop must be a number to be multiplied by 4, or one of the following aliases:`,
      String(spacingAliases),
    )
  }

  return isValid
}
</script>

<style scoped>
.stack__item {
  @apply flex flex-col;
}
.stack--align-center > .stack__item {
  @apply items-center;
}
.stack--align-left > .stack__item {
  @apply items-start;
}
.stack--align-right > .stack__item {
  @apply items-end;
}
.stack--align-stretch > .stack__item {
  @apply items-stretch;
}
</style>
