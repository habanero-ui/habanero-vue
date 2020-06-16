<template>
  <header class="slideover-header">
    <SlideoverHeaderButton @click.native="onBack">
      <Stack align="center" direction="row" space="4">
        <Icon :colorIsBackground="true" name="arrow-left" size="small" />
        <Typography :colorIsBackground="true">
          {{ backText }}
        </Typography>
      </Stack>
    </SlideoverHeaderButton>
    <SlideoverHeaderButton
      v-if="onOpenInNewWindow"
      @click.native="onOpenInNewWindow"
    >
      <Stack align="center" direction="row" space="4">
        <Typography :colorIsBackground="true">
          {{ openInNewWindowText }}
        </Typography>
        <Icon
          :colorIsBackground="true"
          class="slideover-header__new-window-icon"
          name="new-window"
          size="small"
        />
      </Stack>
    </SlideoverHeaderButton>
  </header>
</template>

<script>
import Icon from '../Icon/index'
import SlideoverHeaderButton from './SlideoverHeaderButton'
import Stack from '../Stack/index'
import Typography from '../Typography/index'

export default {
  components: {
    Icon,
    SlideoverHeaderButton,
    Stack,
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
