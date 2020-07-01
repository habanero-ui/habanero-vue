<template>
  <div class="expander">
    <Box
      class="expander__header"
      :paddingX="headerPaddingX"
      paddingY="small"
      @click.native="handleIsOpenChange"
    >
      <Columns alignY="center" space="medium">
        <Column>
          <Box>
            <Typography>{{ text }}</Typography>
          </Box>
        </Column>
        <Column width="content">
          <Box marginRight="-1.5"><Icon :name="chevronIconName" /></Box>
        </Column>
      </Columns>
    </Box>
    <div v-if="isOpen">
      <slot />
    </div>
  </div>
</template>

<script>
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Column, Columns, Icon, Typography },
  props: {
    headerPaddingX: {
      default: '',
      type: String,
    },
    isOpen: {
      default: false,
      type: Boolean,
    },
    onIsOpenChange: {
      default: () => {},
      type: Function,
    },
    text: {
      default: '',
      type: String,
    },
  },
  computed: {
    chevronIconName() {
      return this.isOpen ? 'chevron-up' : 'chevron-down'
    },
  },
  methods: {
    handleIsOpenChange() {
      this.onIsOpenChange(!this.isOpen)
    },
  },
}
</script>

<style scoped>
.expander__header {
  @apply cursor-pointer relative;
}
.expander__header::after {
  @apply absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-100 ease-in-out;
  background-color: black;
  content: '';
}
.expander__header:hover::after {
  opacity: 0.1;
}
.expander__header:active::after {
  opacity: 0.25;
}
</style>
