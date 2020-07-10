<template>
  <Box v-if="image && (firstName || lastName)" class="avatar">
    <img
      v-if="isLoaded"
      :alt="alt"
      class="avatar__image"
      :src="image"
      @error="imageLoadError"
    />
    <div v-if="!isLoaded" class="avatar__image">
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
  @apply w-10 h-10;
}
.avatar__image {
  @apply flex items-center justify-center w-10 h-10 bg-border rounded-full;
}
</style>
