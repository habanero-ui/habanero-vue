<template>
  <Box>
    <img :alt="alt" :class="classes" :src="image" />
  </Box>
</template>

<script>
/* TODO - figure out alt */
/* TODO - figure out passing in image as a prop */
/* TODO - add validators for image and alt, component shouldn't work without both */
/* TODO - if image is broken, show first and last name inside circle */

import Box from '../Box'

export default {
  components: {
    Box,
  },
  props: {
    firstName: {
      default: '',
      type: String,
    },
    image: {
      default: 'http://placekitten.com/256/256',
      type: String,
    },
    lastName: {
      default: '',
      type: String,
    },
  },
  computed: {
    alt() {
      return `this should be working hmm`
    },
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
