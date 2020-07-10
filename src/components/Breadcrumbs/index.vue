<script>
import filter from 'lodash/filter'
import flatten from 'lodash/flatten'
import map from 'lodash/map'
import set from 'lodash/set'

import Column from '../Column/index'
import Columns from '../Columns/index'

export default {
  components: { Column, Columns },
  methods: {
    mapSlotNode(vnode) {
      if (vnode.componentOptions.tag !== 'TextLink') {
        return vnode
      }

      return {
        ...set(vnode, 'componentOptions.propsData.color', 'subtle'),
      }
    },
  },
  render(h) {
    return h(
      Columns,
      {
        class: 'breadcrumbs',
        props: { alignY: 'center', space: 'medium' },
      },
      flatten(
        map(
          filter(this.$slots.default, (vnode) => vnode.tag),
          (vnode, index) => {
            if (index === 0) {
              return [
                h(Column, { props: { width: 'content' } }, [
                  this.mapSlotNode(vnode),
                ]),
              ]
            }

            return [
              h(Column, { props: { width: 'content' } }, [
                h('div', { class: 'breadcrumbs__separator' }),
              ]),
              h(Column, { props: { width: 'content' } }, [
                this.mapSlotNode(vnode),
              ]),
            ]
          },
        ),
      ),
    )
  },
}
</script>

<style scoped>
.breadcrumbs {
  @apply flex;
}
.breadcrumbs__separator {
  @apply bg-subtle rounded-full;
  height: 0.375rem;
  width: 0.375rem;
}
</style>
