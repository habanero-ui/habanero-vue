<template>
  <Box
    :class="classes"
    paddingY="xsmall"
    :tabIndex="tabIndex"
    @click.native="handleClick"
    @keyup.native.enter.space="handleKeyUp"
  >
    <input
      class="checkbox__input"
      :checked="isChecked"
      :disabled="disabled"
      tabIndex="-1"
      type="radio"
    />
    <Columns>
      <Column width="content">
        <div class="checkbox__box">
          <div class="checkbox__check">
            <Icon
              class="checkbox__check-icon"
              :colorIsBackground="true"
              name="check"
            />
          </div>
        </div>
      </Column>
      <Column v-if="text">
        <Box paddingLeft="small" paddingRight="gutter" paddingTop="0.25">
          <Typography class="checkbox__text" component="label">
            {{ text }}
          </Typography>
        </Box>
      </Column>
    </Columns>
  </Box>
</template>

<script>
import Box from '../Box/index'
import Column from '../Column/index'
import Columns from '../Columns/index'
import Icon from '../Icon/index'
import Typography from '../Typography/index'

export default {
  components: { Box, Column, Columns, Icon, Typography },
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
  },
  computed: {
    classes() {
      return [
        'checkbox',
        {
          'checkbox--disabled': this.disabled,
          'checkbox--is-checked': this.isChecked,
        },
      ]
    },

    tabIndex() {
      return this.disabled ? -1 : 0
    },
  },
  methods: {
    handleClick(e) {
      if (this.disabled) return

      this.onIsCheckedChange(!this.isChecked)
    },

    handleKeyUp() {
      if (this.disabled) return

      this.onIsCheckedChange(!this.isChecked)
    },
  },
}
</script>

<style scoped>
.checkbox {
  @apply relative flex cursor-pointer outline-none -my-2;
}
.checkbox--disabled {
  @apply opacity-50 cursor-not-allowed select-none;
}
.checkbox__input {
  @apply absolute;
  left: -9999px;
}
.checkbox__box {
  @apply relative flex items-center justify-center h-5 w-5 border-2 border-black rounded-sm;
}
.checkbox__box::after {
  @apply absolute border-2 border-transparent rounded-sm transition-colors duration-150 ease-in-out;
  content: '';
  height: 1.5rem;
  width: 1.5rem;
}
.checkbox__check {
  @apply relative h-5 w-5 bg-black rounded-sm;
  transform: scale(0);
  transition: transform 150ms ease-in-out;
}
.checkbox--is-checked .checkbox__check {
  transform: scale(1);
}
.checkbox__check-icon {
  @apply -mt-px;
  margin-left: -0.125rem;
}
.checkbox__text {
  @apply cursor-pointer;
}
.checkbox:hover .checkbox__box {
  @apply rounded-none;
}
.checkbox:hover .checkbox__box::after {
  @apply border-grey-300;
}
.checkbox:focus:not(.checkbox--disabled) .checkbox__box::after {
  @apply border-info;
}
.checkbox:focus:not(.checkbox--disabled) .checkbox__box {
  @apply rounded-none;
}
.checkbox--disabled .checkbox__text {
  @apply cursor-not-allowed;
}
</style>
