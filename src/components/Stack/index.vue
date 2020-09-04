<script>
import filter from 'lodash/filter'
import flatten from 'lodash/flatten'
import map from 'lodash/map'

import stackAlignments from '../../constants/stackAlignments'
import PropValidation from '../../mixins/PropValidation'
import Box from '../Box/index'
import Divider from '../Divider/index'

export default {
  mixins: [
    PropValidation({
      align: stackAlignments,
    }),
  ],
  props: {
    align: {
      default: 'stretch',
      type: String,
    },
    component: {
      default: 'div',
      type: String,
    },
    dividerThicknesses: {
      default: 'thin',
      type: String,
    },
    showDividers: {
      default: false,
      type: Boolean,
    },
    space: {
      default: '',
      type: [Number, String],
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
      this.component,
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
                        h(Divider, {
                          props: { thickness: this.dividerThicknesses },
                        }),
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
