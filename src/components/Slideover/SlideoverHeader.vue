<template>
  <header class="slideover-header">
    <SlideoverHeaderButton @click.native="handleBackClick">
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
      v-if="hasOpenInNewWindowListener"
      @click.native="handleOpenInNewWindowClick"
    >
      <Typography :colorIsBackground="true">
        Open in new window
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
  },
  methods: {
    handleBackClick() {
      this.$emit('back')
    },
    handleOpenInNewWindowClick(e) {
      this.$emit('openInNewWindow', e)
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
