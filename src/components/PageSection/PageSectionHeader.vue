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
      <Column
        v-if="$slots.action || (onActionClick && actionText)"
        width="content"
      >
        <slot name="action">
          <Button
            color="info"
            :text="actionText"
            variant="text"
            @click.native="onActionClick"
          />
        </slot>
      </Column>
    </Columns>
  </header>
</template>

<script>
import Button from '../Button/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Typography from '../Typography/index'

export default {
  components: {
    Button,
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
</style>
