<template>
  <Box
    :class="classes"
    :disabled="disabled"
    paddingX="gutter"
    paddingY="2.375"
    :showInteractionOverlay="!disabled"
    :tabIndex="disabled ? -1 : 0"
    @click.native="handleClick"
    @keydown.enter.space.native="handleKeyDown"
    @keyup.enter.space.native="handleKeyUp"
  >
    <slot>
      <Columns alignY="center" space="xsmall">
        <Column width="content">
          <Typography :variant="isSelected ? 'label-large' : 'body-large'">
            {{ text || name }}
          </Typography>
        </Column>
        <Column v-if="isBadgeVisible" width="content">
          <Box marginY="-0.75">
            <Badge :color="badgeColor" :text="badgeText" />
          </Box>
        </Column>
      </Columns>
    </slot>
  </Box>
</template>

<script>
import Badge from '../Badge'
import Box from '../Box'
import Column from '../Column'
import Columns from '../Columns'
import Typography from '../Typography'

export default {
  components: {
    Badge,
    Box,
    Column,
    Columns,
    Typography,
  },
  props: {
    badgeColor: {
      default: 'error',
      type: String,
    },
    badgeText: {
      default: '',
      type: [Number, String],
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    isBadgeVisible: {
      default: false,
      type: Boolean,
    },
    isSelected: {
      default: false,
      type: Boolean,
    },
    name: {
      default: undefined,
      type: [Number, String],
    },
    onSelect: {
      default: undefined,
      type: Function,
    },
    text: {
      default: undefined,
      type: String,
    },
  },
  data: () => ({
    isKeyDown: false,
  }),
  computed: {
    classes() {
      return [
        'tab',
        {
          'tab--is-key-down': !!this.isKeyDown,
          'tab--is-selected': !!this.isSelected,
        },
      ]
    },
  },
  methods: {
    handleClick() {
      if (this.isSelected || this.disabled) return

      this.onSelect(this.name)
    },

    handleKeyDown() {
      if (this.disabled) return

      this.isKeyDown = true
    },

    handleKeyUp() {
      this.isKeyDown = false

      if (this.isSelected || this.disabled) return

      this.onSelect(this.name)
    },
  },
}
</script>

<style scoped>
.tab {
  @apply border-b-2 border-border flex flex-none items-center outline-none;
  min-width: 8rem;
}
.tab::before {
  @apply absolute inset-0 pointer-events-none transition-colors duration-300 ease-in-out border-2 border-transparent;
  margin-bottom: -2px;
  content: '';
}
.tab[disabled] {
  @apply cursor-not-allowed opacity-50;
}
.tab--is-selected {
  @apply border-info;
}
.tab:focus:not([disabled])::before {
  @apply border-info;
}
.tab--is-key-down:not([disabled])::after {
  @apply opacity-25;
}
</style>
