<template>
  <Box class="relative">
    <FormGroup
      :class="classes"
      component="div"
      :error="error"
      :helperText="helperText"
      :label="label"
      labelComponent="label"
      :labelFor="inputId"
      space="xsmall"
    >
      <textarea
        :id="inputId"
        ref="textarea"
        class="text-area__textarea"
        :disabled="disabled"
        :maxlength="maxlength"
        rows="3"
        :value="value"
        v-bind="$attrs"
        @input="handleTextAreaInput"
        v-on="$listeners"
      />
    </FormGroup>
    <Typography
      v-if="showChars"
      class="text-area__characters"
      color="subtle"
      variant="label-small"
      >{{ value.length
      }}<span v-if="maxlength">{{ `/${maxlength}` }}</span></Typography
    >
  </Box>
</template>

<script>
import Box from '../Box/index'
import FormGroup from '../FormGroup/index'
import Typography from '../Typography/index'

export default {
  components: {
    Box,
    FormGroup,
    Typography,
  },
  inheritAttrs: false,
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    error: {
      default: '',
      type: String,
    },
    helperText: {
      default: '',
      type: String,
    },
    id: {
      default: '',
      type: String,
    },
    label: {
      default: '',
      type: String,
    },
    maxlength: {
      default: undefined,
      type: Number,
    },
    onValueChange: {
      default: undefined,
      type: Function,
    },
    showChars: {
      default: false,
      type: Boolean,
    },
    value: {
      default: '',
      type: [Number, String],
    },
  },
  computed: {
    classes() {
      return [
        'text-area',
        {
          'text-area--disabled': this.disabled,
          'text-area--error': this.error,
        },
      ]
    },

    inputId() {
      return this.id || this.label.replace(/ /g, '') || undefined
    },
  },
  methods: {
    handleTextAreaInput({ target }) {
      if (!this.onValueChange) return

      const newValue = target.value

      target.value = this.value ? this.value : ''

      this.onValueChange(newValue)
    },
  },
}
</script>

<style scoped>
.text-area {
  @apply w-full;
}
.text-area--disabled {
  @apply cursor-not-allowed select-none opacity-50;
}
.text-area--disabled * {
  @apply cursor-not-allowed select-none;
}
.text-area__characters {
  @apply absolute top-0 right-0;
}
.text-area__textarea {
  @apply bg-transparent border border-black px-4 py-2 transition-colors duration-300 ease-in-out outline-none w-full;
  border-radius: 0.3125rem;
}
.text-area__textarea:not([disabled]):hover {
  @apply border-2;
  padding-left: 15px;
  padding-right: 15px;
}
.text-area__textarea:focus {
  @apply border-2 border-info;
  padding-left: 15px;
  padding-right: 15px;
}
.text-area--error .text-area__textarea {
  @apply border-error;
}
</style>
