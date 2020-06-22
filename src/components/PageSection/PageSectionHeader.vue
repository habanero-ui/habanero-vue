<template>
  <header v-if="actionText || titleText" class="page-section-header">
    <Columns>
      <Column>
        <Typography v-if="titleText">
          {{ titleText }}
        </Typography>
      </Column>
      <Column>
        <Typography v-if="actionText">
          {{ actionText }}
        </Typography>
      </Column>
    </Columns>
  </header>
</template>

<script>
import Column from '../Column/index'
import Columns from '../Columns/index'
import Typography from '../Typography/index'

export default {
  components: {
    Column,
    Columns,
    Typography,
  },
  props: {
    actionText: {
      default: '',
      type: String,
    },
    titleText: {
      default: '',
      type: String,
    },
    onActionClick: {
      default: undefined,
      type: Function,
    },
  },
}
</script>

<style scoped>
.page-section-header {
  @apply flex flex-col pb-4;
}
</style>
