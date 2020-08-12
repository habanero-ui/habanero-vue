<script>
import filter from 'lodash/filter'
import map from 'lodash/map'

import verticalAlignments from '../../constants/verticalAlignments'
import PropValidation from '../../mixins/PropValidation'
import Box from '../Box/index'

export default {
  mixins: [
    PropValidation({
      align: ['center', 'left', 'right'],
      alignY: verticalAlignments,
    }),
  ],
  props: {
    align: {
      default: 'left',
      type: String,
    },
    alignY: {
      default: 'stretch',
      type: String,
    },
    space: {
      default: '',
      type: [Number, String],
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
