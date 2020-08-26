<template>
  <div class="definition-list-item">
    <dt class="definition-list-item__term">
      <Typography variant="label-large">{{ name }}</Typography>
    </dt>
    <dd class="definition-list-item__details"><slot /></dd>
  </div>
</template>

<script>
import Typography from '../Typography/index'

export default {
  components: { Typography },
  props: {
    name: {
      default: '',
      type: String,
    },
  },
}
</script>

<style scoped>
.definition-list-item {
  @apply table-row;
}
.definition-list-item__term {
  @apply table-cell whitespace-no-wrap;
}
.definition-list-item__details {
  @apply table-cell;
}
</style>
