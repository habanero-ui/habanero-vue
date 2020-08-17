<template>
  <div class="page-section">
    <Stack class="page-section__main" space="medium">
      <PageSectionHeader
        :actionText="actionText"
        :onActionClick="onActionClick"
        :titleText="titleText"
      >
        <template v-if="$slots.action" slot="action">
          <slot name="action" />
        </template>
      </PageSectionHeader>
      <div class="page-section__content">
        <slot />
      </div>
    </Stack>
  </div>
</template>

<script>
import Stack from '../Stack/index'
import PageSectionHeader from './PageSectionHeader'

export default {
  components: { PageSectionHeader, Stack },
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
  @apply flex;
}
.page-section__main {
  @apply flex-1;
  max-width: 50rem;
}
.page-section__content {
  @apply border-2 border-border;
}
</style>
