<template>
  <div class="expander">
    <Box
      :paddingX="headerPaddingX"
      paddingY="small"
      showInteractionOverlay
      @click.native="handleIsOpenChange"
    >
      <Columns alignY="center" space="medium">
        <Column>
          <Box>
            <Typography color="subtle" variant="label-large">
              {{ text }}
            </Typography>
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
