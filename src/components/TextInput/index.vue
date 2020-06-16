<template>
  <input :class="classes" @blur="update($event)" @input="update($event)" />
</template>

<script>
export default {
  props: {
    delay: {
      default: 0,
      type: Number,
    },
  },
  computed: {
    classes() {
      return ['input']
    },
  },
  methods: {
    update({ target }) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$emit('input', target.value)
      }, this.delay)
    },
  },
}
</script>

<style scoped>
.input {
  @apply relative px-4 h-10 w-full border border-black rounded-md text-black cursor-pointer transition-colors duration-300 ease-in-out;
}
.input::after {
  @apply absolute inset-0 -m-px bg-black rounded;
  content: '';
}
.input:focus {
  @apply border-info outline-none;
}
.input:disabled {
  @apply border-grey-400 text-grey-400 cursor-not-allowed;
}
</style>
