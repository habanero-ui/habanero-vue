<template>
  <header class="slideover-header">
    <SlideoverHeaderButton @click.native="onBack">
      <Icon
        :colorIsBackground="true"
        class="slideover-header__back-icon"
        name="arrow-left"
        size="small"
      />
      <Typography :colorIsBackground="true">
        {{ backText }}
      </Typography>
    </SlideoverHeaderButton>
    <SlideoverHeaderButton
      v-if="onOpenInNewWindow"
      @click.native="onOpenInNewWindow"
    >
      <Typography :colorIsBackground="true">
        {{ openInNewWindowText }}
      </Typography>
      <Icon
        :colorIsBackground="true"
        class="slideover-header__new-window-icon"
        name="new-window"
        size="small"
      />
    </SlideoverHeaderButton>
  </header>
</template>

<script>
import Icon from '../Icon/index'
import SlideoverHeaderButton from './SlideoverHeaderButton'
import Typography from '../Typography/index'

export default {
  components: {
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
  @apply h-16 flex justify-between bg-black;
}
.slideover-header__back-icon {
  @apply mr-4;
}
.slideover-header__new-window-icon {
  @apply ml-4;
}
</style>
