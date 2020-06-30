<script>
import filter from 'lodash/filter'
import includes from 'lodash/includes'
import map from 'lodash/map'
import spacingAliases from '../../constants/spacingAliases'
import Box from '../Box/index'

export default {
  props: {
    align: {
      default: 'left',
      validator: getIsAlignValid,
    },
    alignY: {
      default: 'stretch',
      validator: getIsAlignYValid,
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
        'inline',
        `inline--align-${this.align}`,
        `inline--align-y-${this.alignY}`,
      ]
    },
  },
  methods: {
    mapSlotNode(vnode, h) {
      return h(
        Box,
        {
          class: 'inline__item',
          props: {
            paddingLeft: this.space,
            paddingTop: this.space,
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
      [
        h(
          Box,
          {
            class: 'inline__content',
            props: {
              marginLeft: `-${this.space}`,
              marginTop: `-${this.space}`,
            },
          },
          [
            map(
              filter(this.$slots.default, (vnode) => vnode.tag),
              (vnode) => this.mapSlotNode(vnode, h),
            ),
          ],
        ),
      ],
    )
  },
}

function getIsAlignValid(value) {
  const isValid = includes(['center', 'left', 'right'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Inline: The "align" prop must be one of the following when defined:',
      String(['center', 'left', 'right']),
    )
  }

  return isValid
}

function getIsAlignYValid(value) {
  const isValid = includes(['bottom', 'center', 'stretch', 'top'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Inline: The "alignY" prop must be one of the following when defined:',
      String(['bottom', 'center', 'stretch', 'top']),
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
      `Inline: The "space" prop must be a number to be multiplied by 4, or one of the following aliases:`,
      String(spacingAliases),
    )
  }

  return isValid
}
</script>

<style scoped>
.inline {
  @apply flex;
}
.inline__content {
  @apply flex flex-wrap;
}
.inline__item {
  @apply flex;
}
.inline--align-center > .inline__content {
  @apply justify-center;
}
.inline--align-left > .inline__content {
  @apply justify-start;
}
.inline--align-right > .inline__content {
  @apply justify-end;
}
.inline--align-y-bottom > .inline__content {
  @apply items-end;
}
.inline--align-y-center > .inline__content {
  @apply items-center;
}
.inline--align-y-stretch > .inline__content {
  @apply items-stretch;
}
.inline--align-y-top > .inline__content {
  @apply items-start;
}
</style>
