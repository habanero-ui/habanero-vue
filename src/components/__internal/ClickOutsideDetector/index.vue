<script>
export default {
  props: {
    onClickOutside: {
      default: () => {},
      type: Function,
    },
  },
  data: () => ({
    listener: undefined,
  }),
  mounted() {
    this.listener = (e) => {
      if (e.target === this.$el || this.$el.contains(e.target)) return

      this.onClickOutside(e)
    }

    document.addEventListener('click', this.listener)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.listener)
  },
  render() {
    return this.$slots.default[0]
  },
}
</script>
