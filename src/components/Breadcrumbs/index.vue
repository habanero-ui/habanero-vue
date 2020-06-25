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
      'ul',
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
  @apply flex truncate;
}
.breadcrumbs .breadcrumb:last-child::after {
  @apply hidden;
}
</style>
