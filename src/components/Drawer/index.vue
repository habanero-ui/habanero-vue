<template>
  <div class="drawer" :class="classes">
    <div
      v-if="mode === 'cover'"
      class="drawer__overlay"
      @click.self="handleOverlayClick"
    />
    <div ref="panel" class="drawer__panel" :style="panelStyles">
      <slot />
    </div>
  </div>
</template>

<script>
import drawerModes from '../../constants/drawerModes'
import drawerPositions from '../../constants/drawerPositions'
import PropValidation from '../../mixins/PropValidation'

export default {
  mixins: [
    PropValidation({
      mode: drawerModes,
      position: drawerPositions,
    }),
  ],
  props: {
    isOpen: {
      default: false,
      type: Boolean,
    },
    mode: {
      default: 'cover',
      type: String,
    },
    onIsOpenChange: {
      default: () => {},
      type: Function,
    },
    position: {
      default: 'left',
      type: String,
    },
    width: {
      default: 256,
      type: Number,
    },
  },
  data: () => ({
    offsetLeft: 0,
    offsetRight: 0,
  }),
  computed: {
    classes() {
      return {
        'drawer--is-open': this.isOpen,
        'drawer--mode-cover': this.mode === 'cover',
        'drawer--mode-push': this.mode === 'push',
        'drawer--position-left': this.position === 'left',
        'drawer--position-right': this.position === 'right',
      }
    },

    panelStyles() {
      return {
        marginLeft: this.offsetLeft,
        marginRight: this.offsetRight,
        [this.mode === 'cover' ? 'maxWidth' : 'width']: `${this.width / 16}rem`,
      }
    },
  },
  watch: {
    isOpen() {
      this.handleIsOpenChange()
    },

    mode() {
      this.handleIsOpenChange()
    },

    position() {
      this.handleIsOpenChange()
    },

    width() {
      this.handleIsOpenChange()
    },
  },
  mounted() {
    this.handleIsOpenChange()
  },
  methods: {
    handleOverlayClick() {
      this.onIsOpenChange(false)
    },

    handleIsOpenChange() {
      if (!this.$refs.panel) return

      const offset = this.isOpen
        ? 0
        : -this.$refs.panel.getBoundingClientRect().width

      this.offsetLeft =
        this.position === 'left' ? `${offset / 16}rem` : undefined
      this.offsetRight =
        this.position === 'right' ? `${offset / 16}rem` : undefined
    },
  },
}
</script>

<style scoped>
.drawer {
  @apply flex-none overflow-hidden pointer-events-none;
}
.drawer--mode-cover {
  @apply fixed inset-0 z-50;
}
.drawer__overlay {
  @apply absolute inset-0 bg-black-half opacity-0;
  transition: opacity 400ms ease;
}
.drawer__panel {
  @apply flex-none h-full bg-white flex flex-col;
  transition: margin 200ms ease, transform 200ms ease;
}
.drawer--mode-cover .drawer__panel {
  @apply absolute w-full;
}
.drawer--position-left .drawer__panel {
  @apply left-0;
}
.drawer--position-right .drawer__panel {
  @apply right-0;
}
.drawer--is-open {
  @apply pointer-events-auto;
}
.drawer--is-open .drawer__overlay {
  @apply opacity-100;
}
</style>
