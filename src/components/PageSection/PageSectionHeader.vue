<template>
  <header
    v-if="(onActionClick && actionText) || titleText"
    class="page-section-header"
  >
    <Columns>
      <Column>
        <Typography v-if="titleText" variant="label-large">
          {{ titleText }}
        </Typography>
      </Column>
      <Column v-if="onActionClick && actionText" width="content">
        <slot name="action">
          <Typography
            class="page-section-header__action-text"
            color="info"
            variant="button"
            @click.native="onActionClick"
          >
            {{ actionText }}
          </Typography>
        </slot>
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
.page-section-header {
  @apply flex flex-col;
}

.page-section-header__action-text {
  @apply cursor-pointer;
}
</style>
