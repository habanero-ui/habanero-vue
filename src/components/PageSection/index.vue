<template>
  <div class="page-section">
    <PageSectionHeader
      :actionText="actionText"
      :onActionClick="onActionClick"
      :titleText="titleText"
    />
    <div class="border-2 border-grey-300">
      <slot />
    </div>
  </div>
</template>

<script>
import PageSectionHeader from './PageSectionHeader'

export default {
  components: { PageSectionHeader },
  props: {
    actionText: {
      default: '',
      type: String,
    },
    onActionClick: {
      default: undefined,
      type: Function,
    },
    titleText: {
      default: '',
      type: String,
    },
  },
}
</script>

<style scoped>
.page-section {
  @apply w-full;
}
</style>
