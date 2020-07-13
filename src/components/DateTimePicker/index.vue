<template>
  <TextInput
    ref="dateTimePicker"
    :disabled="disabled"
    :error="error"
    :helperText="helperText"
    iconName="calendar-date"
    iconSide="right"
    :label="label"
    :placeholder="placeholder"
    :value="value"
  />
</template>

<script>
import flatpickr from 'flatpickr'

import TextInput from '../TextInput/index'

export default {
  components: {
    TextInput,
  },
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
    label: {
      default: '',
      type: String,
    },
    onValueChange: {
      default: undefined,
      type: Function,
    },
    maxDate: {
      default: null,
      type: [Number, String],
    },
    minDate: {
      default: null,
      type: [Number, String],
    },
    placeholder: {
      default: '',
      type: String,
    },
    value: {
      default: null,
      type: String,
    },
  },
  data: () => ({
    picker: null,
  }),
  beforeDestroy() {
    if (this.picker) {
      this.picker.destroy()
    }
  },
  mounted() {
    this.picker = flatpickr(this.$refs.dateTimePicker.$refs.input, {
      dateFormat: 'm/d/Y h:i K',
      enableTime: true,
      maxDate: this.maxDate,
      minDate: this.minDate,
      onChange: this.handleInputChange,
    })
  },
  methods: {
    handleInputChange() {
      this.onValueChange(this.$refs.dateTimePicker.$refs.input.value)
    },
  },
}
</script>
