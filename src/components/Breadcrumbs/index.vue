<script>
export default {
  methods: {
    mapSlotNode(vnode) {
      if (
        vnode.componentOptions &&
        vnode.componentOptions.tag === 'Breadcrumb'
      ) {
        return vnode
      }
    },
  },
  render(h) {
    return h(
      'div',
      {
        class: 'breadcrumbs',
      },
      this.$slots.default.map(this.mapSlotNode),
    )
  },
}
</script>

<style scoped>
.breadcrumbs {
  @apply flex;
}
</style>
