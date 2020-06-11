<template>
  <Slideover :isOpen="true" />
</template>

<script>
import { Slideover } from './index'

export default {
  components: {
    Slideover,
  },
  props: {
    isOpen: {
      default: undefined,
      type: Boolean,
    },
  },
}
</script>

<style scoped></style>
