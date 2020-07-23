<template>
  <Box class="avatar">
    <img
      v-if="image && isLoaded"
      :alt="alt"
      class="avatar__image"
      :src="image"
      @error="imageLoadError"
    />
    <div v-if="!image || !isLoaded" class="avatar__image">
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
      return this.firstName || this.lastName
        ? `${this.firstName} ${this.lastName}`.trim()
        : undefined
    },
    initials() {
      return `
        ${this.firstName ? this.firstName[0] : ''}${
        this.lastName ? this.lastName[0] : ''
      }
      `
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
  @apply flex items-center justify-center w-full h-full bg-border rounded-full;
}
</style>
