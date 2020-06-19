<script>
import includes from 'lodash/includes'

export default {
  props: {
    align: {
      default: 'stretch',
      validator: getIsAlignValid,
    },
    space: {
      default: 0,
      type: [Number, String],
    },
  },
  computed: {
    classes() {
      return ['stack', `stack--align-${this.align}`]
    },

    itemStyle() {
      return `padding-top: ${(parseFloat(this.space) * 4) / 16}rem;`
    },
  },
  methods: {
    mapSlotNode(vnode, h, index) {
      return h(
        'div',
        {
          class: 'stack__item',
          style: index > 0 ? this.itemStyle : '',
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
        ? this.$slots.default
            .filter((vnode) => vnode.tag)
            .map((vnode, index) => this.mapSlotNode(vnode, h, index))
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
</script>

<style scoped>
.stack__item {
  @apply flex flex-col;
}
.stack--align-center .stack__item {
  @apply items-center;
}
.stack--align-left .stack__item {
  @apply items-start;
}
.stack--align-right .stack__item {
  @apply items-end;
}
.stack--align-stretch .stack__item {
  @apply items-stretch;
}
</style>
