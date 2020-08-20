<template>
  <div class="definition-list-item">
    <dt>
      <Typography variant="label-large">{{ item.term }}</Typography>
    </dt>
    <dd>
      <Typography>{{ item.description }}</Typography>
    </dd>
  </div>
</template>

<script>
import Typography from '../Typography/index'

export default {
  components: { Typography },
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style scoped>
.definition-list-item {
  @apply mb-4;
}
</style>
