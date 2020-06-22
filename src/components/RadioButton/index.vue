<template>
  <div :class="classes" @click="handleClick">
    <input
      class="radio-button__input"
      :checked="isChecked"
      :disabled="disabled"
      type="radio"
    />
    <Columns>
      <Column width="content">
        <div class="radio-button__ring"><div class="radio-button__dot" /></div>
      </Column>
      <Column v-if="text">
        <Box paddingLeft="small" paddingRight="gutter" paddingTop="0.25">
          <Typography class="radio-button__text" component="label">
            {{ text }}
          </Typography>
        </Box>
      </Column>
    </Columns>
  </div>
</template>

<script>
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Column, Columns, Typography },
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    isChecked: {
      default: false,
      type: Boolean,
    },
    onIsCheckedChange: {
      default: () => {},
      type: Function,
    },
    text: {
      default: '',
      type: String,
    },
    value: {
      default: undefined,
      type: [Number, String],
    },
  },
  computed: {
    classes() {
      return [
        'radio-button',
        {
          'radio-button--disabled': this.disabled,
          'radio-button--is-checked': this.isChecked,
        },
      ]
    },
  },
  methods: {
    handleClick(e) {
      if (this.disabled || this.isChecked) return

      this.onIsCheckedChange(this.value)
    },
  },
}
</script>

<style scoped>
.radio-button {
  @apply relative flex cursor-pointer;
}

.radio-button--disabled {
  @apply opacity-50 cursor-not-allowed;
}

.radio-button__input {
  @apply absolute;
  left: -9999px;
}

.radio-button__ring {
  @apply flex items-center justify-center h-5 w-5 border-2 border-black rounded-full;
}

.radio-button__dot {
  @apply h-3 w-3 bg-black rounded-full;
  transform: scale(0);
  transition: transform 150ms ease-in-out;
}

.radio-button--is-checked .radio-button__dot {
  transform: scale(1);
}

.radio-button__text {
  @apply cursor-pointer;
}

.radio-button--disabled .radio-button__text {
  @apply cursor-not-allowed;
}
</style>
