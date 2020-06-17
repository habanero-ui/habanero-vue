<script>
import includes from 'lodash/includes'

export default {
  props: {
    align: {
      default: undefined,
      validator: getIsAlignValid,
    },
    direction: {
      default: 'column',
      validator: getIsDirectionValid,
    },
    space: {
      default: 2,
      type: [Number, String],
    },
  },
  computed: {
    classes() {
      return [
        'stack',
        { [`stack--align-${this.align}`]: this.align },
        `stack--direction-${this.direction}`,
      ]
    },

    itemWrappingPaddingClass() {
      return {
        column: `pt-${this.space}`,
        'column-reverse': `pb-${this.space}`,
        row: `pl-${this.space}`,
        'row-reverse': `pr-${this.space}`,
      }[this.direction]
    },
  },
  methods: {
    mapSlotNode(vnode, h, index) {
      return h(
        'div',
        {
          class: [
            'stack__item',
            { [this.itemWrappingPaddingClass]: index > 0 },
          ],
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
  const isValid = includes([undefined, 'center', 'end', 'start'], value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Stack: The "align" prop must be one of the following when defined:',
      String(['center', 'end', 'start']),
    )
  }

  return isValid
}

function getIsDirectionValid(value) {
  const isValid = includes(
    ['column', 'column-reverse', 'row', 'row-reverse'],
    value,
  )

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'Stack: The "direction" prop must be one of the following when defined:',
      String(['column', 'column-reverse', 'row', 'row-reverse']),
    )
  }

  return isValid
}
</script>

<style scoped>
.stack {
  display: flex;
}
.stack--align-center {
  align-items: center;
}
.stack--align-start {
  align-items: flex-start;
}
.stack--align-end {
  align-items: flex-end;
}
.stack--direction-column {
  flex-direction: column;
}
.stack--direction-column-reverse {
  flex-direction: column-reverse;
}
.stack--direction-row {
  flex-direction: row;
}
.stack--direction-row-reverse {
  flex-direction: row-reverse;
}
</style>
