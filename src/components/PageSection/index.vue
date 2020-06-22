<template>
  <div class="flex mb-10">
    <div class="flex-1 max-w-lg">
      <PageSectionHeader
        :actionText="actionText"
        :onActionClick="onActionClick"
        :titleText="titleText"
      />
      <div class="border-2 border-grey-300">
        <slot />
      </div>
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
