<script>
import isNil from 'lodash/isNil'
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
      if (!(vnode.componentOptions && vnode.componentOptions.tag === 'Tab')) {
        return vnode
      }

      const { name } = vnode.componentOptions.propsData
      const isSelected = !isNil(name) && name === this.selectedName

      return {
        ...set(vnode, 'componentOptions.propsData.isSelected', isSelected),
        ...set(
          vnode,
          'componentOptions.propsData.onSelect',
          this.onSelectedNameChange,
        ),
      }
    },
  },
  render(h) {
    return h(
      'div',
      {
        class: 'tabs',
      },
      this.$slots.default.map(this.mapSlotNode),
    )
  },
}
</script>

<style scoped>
.tabs {
  @apply flex;
}
</style>
