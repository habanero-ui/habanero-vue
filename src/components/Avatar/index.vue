<template>
  <Box>
    <img :alt="alt" :class="classes" :src="image" />
  </Box>
</template>

<script>
import Box from '../Box'

export default {
  components: {
    Box,
  },
  props: {
    alt: {
      default: 'Fuzzy kitten',
      type: String,
    },
    image: {
      default: 'http://placekitten.com/256/256',
      type: String,
    },
  },
  computed: {
    classes() {
      return ['avatar']
    },
  },
}
</script>

<style scoped>
.avatar {
  @apply rounded-full h-10 w-10;
}
</style>
