<template>
  <div @click="onIsOpenChange">
    <header class="expander-header">
      <div>
        <Columns alignY="center" space="4">
          <Column>
            <Typography>
              {{ text }}
            </Typography>
          </Column>
        </Columns>
      </div>
      <div>
        <Columns alignY="center" space="4">
          <Column width="content">
            <Icon
              class="expander-header__chevron-icon"
              :name="iconName"
              size="small"
            />
          </Column>
        </Columns>
      </div>
    </header>
  </div>
</template>

<script>
import Icon from '../Icon/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Typography from '../Typography/index'

export default {
  components: {
    Column,
    Columns,
    Icon,
    Typography,
  },
  props: {
    text: {
      default: 'Expand',
      type: String,
    },
    onIsOpenChange: {
      default: undefined,
      type: Function,
    },
    isOpen: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    iconName() {
      return this.isOpen ? 'chevron-up' : 'chevron-down'
    },
  },
}
</script>

<style scoped>
.expander-header {
  @apply h-16 flex flex-none justify-between;
}
</style>
