<template>
  <Box v-if="image && (firstName || lastName)">
    <img
      v-if="isLoaded"
      :alt="alt"
      :class="classes"
      :src="image"
      @error="imageLoadError"
    />
    <div v-if="!isLoaded" :class="classes">
      {{ initials }}
    </div>
  </Box>
</template>

<script>
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
      default: '',
      type: String,
    },
    lastName: {
      default: '',
      type: String,
    },
  },
  data: () => ({
    isLoaded: true,
  }),
  computed: {
    alt() {
      return `${this.firstName} ${this.lastName}`
    },
    classes() {
      return ['avatar']
    },
    initials() {
      /* eslint-disable */
      return `
        ${this.firstName ? this.firstName[0] : ''}${
        this.lastName ? this.lastName[0] : ''
      }
      `
      /* eslint-enable */
    },
  },
  methods: {
    imageLoadError() {
      this.isLoaded = false
    },
  },
}
</script>

<style scoped>
.avatar {
  @apply flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full;
}
</style>
