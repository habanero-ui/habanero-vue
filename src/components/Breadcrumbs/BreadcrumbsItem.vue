<template>
  <Typography
    :class="classes"
    color="subtle"
    :component="isLast ? 'span' : 'a'"
    :href="isLast ? undefined : item.href"
    variant="label-large"
    @click.native="handleClick"
  >
    {{ item.text }}
  </Typography>
</template>

<script>
import Typography from '../Typography/index'

export default {
  components: { Typography },
  props: {
    isLast: {
      required: true,
      type: Boolean,
    },
    item: {
      required: true,
      type: Object,
    },
    onSelect: {
      required: true,
      type: Function,
    },
  },
  computed: {
    classes() {
      return [
        'breadcrumbs-item',
        {
          'breadcrumbs-item--last': this.isLast,
        },
      ]
    },
  },
  methods: {
    handleClick() {
      if (this.isLast) return

      this.onSelect(this.item)
    },
  },
}
</script>

<style scoped>
.breadcrumbs-item:not(.breadcrumbs-item--last) {
  @apply cursor-pointer;
}
</style>
