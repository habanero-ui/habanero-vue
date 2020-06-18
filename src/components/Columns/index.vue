<script>
import set from 'lodash/set'

export default {
  props: {
    onSelectedNameChange: {
      default: undefined,
      type: Function,
    },
    selectedName: {
      default: undefined,
      type: [Number, String],
    },
  },
  methods: {
    mapSlotNode(vnode) {
      const { width } = vnode.componentOptions.propsData

      return {
        ...set(
          vnode,
          'componentOptions.propsData.class',
          {
            content: 'column--width-content',
            fluid: 'column--width-fluid',
          }[width],
        ),
      }
    },
  },
  render(h) {
    return h(
      'div',
      {
        class: 'columns',
      },
      this.$slots.default.filter((vnode) => vnode.tag).map(this.mapSlotNode),
    )
  },
}
</script>

<style scoped>
.columns {
  @apply flex;
}
</style>
