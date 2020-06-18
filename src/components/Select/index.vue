<template>
  <div class="flex">
    <select v-model="selected" class="input" v-bind="$attrs">
      <option value="">
        Choose an option
      </option>
      <option
        v-for="option in options"
        :key="option.label"
        :value="option.value"
        >{{ option.label }}</option
      >
    </select>
    <div class="flex items-center h-10 z-10 -ml-8">
      <Icon name="chevron-down" :color="isDisabled ? 'subtle' : 'none'" />
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import isEmpty from 'lodash/isEmpty'
import isUndefined from 'lodash/isUndefined'
import Icon from '../Icon'

export default {
  name: 'Select',
  directives: { ClickOutside },
  components: { Icon },
  inheritAttrs: false,

  props: {
    options: Array,
  },

  data: () => ({
    selected: '',
    name: Date.now().toString(),
    open: false,
  }),

  computed: {
    currentSelectedOption() {
      return this.options.find((item) => item.value === this.selected)
    },

    isDisabled() {
      return !isUndefined(this.$attrs.disabled) && isEmpty(this.$attrs.disabled)
    },
  },

  watch: {
    open(value) {
      this.$refs.details.open = value
    },

    selected(value) {
      this.$emit('onSelectChange', this.currentSelectedOption)
    },
  },

  methods: {
    onToggle(e) {
      this.open = e.target.open
    },

    onClickOutside() {
      if (this.open) {
        this.open = false
      }
    },

    close() {
      this.open = false
    },
  },
}
</script>

<style scoped>
.input {
  @apply relative px-4 h-10 w-full border border-black rounded-md text-black cursor-pointer transition-colors duration-300 ease-in-out flex items-center;
}

.input {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}

.input::-ms-expand {
  display: none;
}

.input:focus {
  @apply border-info outline-none;
}

.input:disabled {
  @apply border-grey-400 text-grey-400 cursor-not-allowed;
}

.input > .selected {
  @apply flex-1;
}
</style>
