<template>
  <header class="slideover-header">
    <SlideoverHeaderButton @click.native="onBack">
      <Columns alignY="center" space="4">
        <Column width="content">
          <Icon :colorIsBackground="true" name="arrow-left" size="small" />
        </Column>
        <Column>
          <Typography :colorIsBackground="true">
            {{ backText }}
          </Typography>
        </Column>
      </Columns>
    </SlideoverHeaderButton>
    <SlideoverHeaderButton
      v-if="onOpenInNewWindow"
      @click.native="onOpenInNewWindow"
    >
      <Columns alignY="center" space="4">
        <Column>
          <Typography :colorIsBackground="true">
            {{ openInNewWindowText }}
          </Typography>
        </Column>
        <Column width="content">
          <Icon
            :colorIsBackground="true"
            class="slideover-header__new-window-icon"
            name="new-window"
            size="small"
          />
        </Column>
      </Columns>
    </SlideoverHeaderButton>
  </header>
</template>

<script>
import Icon from '../Icon/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Typography from '../Typography/index'
import SlideoverHeaderButton from './SlideoverHeaderButton'

export default {
  components: {
    Column,
    Columns,
    Icon,
    SlideoverHeaderButton,
    Typography,
  },
  props: {
    backText: {
      default: 'Back',
      type: String,
    },
    onBack: {
      default: undefined,
      type: Function,
    },
    onOpenInNewWindow: {
      default: undefined,
      type: Function,
    },
    openInNewWindowText: {
      default: 'Open in new window',
      type: String,
    },
  },
}
</script>

<style scoped>
.slideover-header {
  @apply h-16 flex flex-none justify-between bg-black;
}
</style>
