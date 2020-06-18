<template>
  <Stack space="2">
    <Typography v-if="label" component="label" variant="label-large">
      {{ label }}
    </Typography>

    <div class="flex">
      <select v-model="selected" :class="selectClasses" v-bind="$attrs">
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

    <Typography v-if="error" color="error" variant="body-small">
      {{ error }}
    </Typography>
  </Stack>
</template>

<script>
import isEmpty from 'lodash/isEmpty'
import isUndefined from 'lodash/isUndefined'
import find from 'lodash/find'

import Icon from '../Icon'
import Typography from '../Typography'
import Stack from '../Stack'

export default {
  name: 'Select',
  components: { Icon, Typography, Stack },
  inheritAttrs: false,

  props: {
    options: Array,
    label: {
      default: '',
      type: String,
    },
    error: {
      default: '',
      type: String,
    },
  },

  data: () => ({
    selected: '',
    name: Date.now().toString(),
    open: false,
  }),

  computed: {
    currentSelectedOption() {
      return find(this.options, (item) => item.value === this.selected)
    },

    isDisabled() {
      return !isUndefined(this.$attrs.disabled) && isEmpty(this.$attrs.disabled)
    },

    selectClasses() {
      return ['select', { 'select--has-error': this.error }]
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
.select {
  @apply relative px-4 h-10 w-full border border-black rounded-md text-black cursor-pointer transition-colors duration-300 ease-in-out flex items-center;
}

.select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}

.select::-ms-expand {
  display: none;
}

.select:focus {
  @apply border-info outline-none;
}

.select:disabled {
  @apply border-grey-400 text-grey-400 cursor-not-allowed;
}

.select > .selected {
  @apply flex-1;
}

.select--has-error {
  @apply border-error;
}
</style>
