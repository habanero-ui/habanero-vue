<template>
  <div>
    <dt>
      <Typography variant="label-large">{{ name }}</Typography>
    </dt>
    <dd><slot /></dd>
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
