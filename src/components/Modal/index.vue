<template>
  <div
    class="modal"
    :class="{ 'modal--is-open': isOpen }"
    @click.self="handleCloseClick"
  >
    <div class="modal__panel">
      <div class="modal__content">
        <slot />
      </div>
      <Icon class="modal__close-icon" name="close" />
    </div>
  </div>
</template>

<script>
import Icon from '../Icon/index'

export default {
  components: {
    Icon,
  },
  props: {
    isOpen: {
      default: undefined,
      type: Boolean,
    },
    subtitle: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
  },
  methods: {
    handleCloseClick() {
      this.$emit('isOpenChange', false)
    },
  },
}
</script>

<style scoped>
.modal {
  @apply absolute inset-0 flex items-center justify-center w-full min-h-screen overflow-hidden opacity-0 pointer-events-none bg-black-half;
  top: 0;
  transition: opacity 300ms ease-in-out;
  will-change: transform;
}
.modal__panel {
  @apply w-11/12 mx-auto shadow-lg z-50 overflow-y-auto;
  transform: translateX(100%);
  transition: transform 300ms ease-in-out;
  will-change: transform;
}
.modal__close-icon {
  @apply absolute top-0 right-0 m-3;
}
.modal__content {
  @apply p-4 rounded bg-white flex flex-col flex-1;
}
.modal--is-open {
  @apply pointer-events-auto opacity-100;
}
.modal--is-open .modal__panel {
  transform: translateX(0);
}
</style>
