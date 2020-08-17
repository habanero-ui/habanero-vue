<template>
  <Box class="avatar">
    <img
      v-if="image && !hasError"
      :alt="alt"
      class="avatar__image"
      :src="image"
      @error="handleImageLoadError"
    />
    <div v-if="!image || hasError" class="avatar__image">
      {{ initials }}
    </div>
  </Box>
</template>

<script>
import { computed, ref, toRefs, watch } from '@vue/composition-api'

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
  setup(props) {
    const { firstName, image, lastName } = toRefs(props)
    const hasError = ref(false)

    const alt = computed(() =>
      firstName.value || lastName.value
        ? `${firstName.value} ${lastName.value}`.trim()
        : undefined,
    )

    const initials = computed(
      () => `
        ${firstName.value ? firstName.value[0] : ''}${
        lastName.value ? lastName.value[0] : ''
      }
      `,
    )

    const handleImageLoadError = () => {
      hasError.value = true
    }

    watch(image, () => {
      hasError.value = false
    })

    return {
      alt,
      handleImageLoadError,
      initials,
      hasError,
    }
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
