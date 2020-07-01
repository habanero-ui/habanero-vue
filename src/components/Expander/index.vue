<template>
  <div class="expander-border">
    <div class="expander">
      <ExpanderHeader
        :text="titleText"
        :onIsOpenChange="onIsOpenChange"
        :isOpen="isOpen"
      />
      <div v-if="isOpen">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import ExpanderHeader from './ExpanderHeader'

export default {
  components: {
    ExpanderHeader,
  },
  props: {
    defaultExpansionState: {
      default: false,
      type: Boolean,
    },
    titleText: {
      default: '',
      type: String,
    },
  },
  data: () => ({
    isOpen: false,
  }),
  computed: {
    iconName() {
      return this.isOpen ? 'chevron-up' : 'chevron-down'
    },
  },
  created() {
    this.isOpen = this.defaultExpansionState
  },
  methods: {
    onIsOpenChange() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style scoped>
.expander-border {
  @apply w-full border-2 border-grey-300;
}

.expander {
  margin: 8px;
}
</style>
