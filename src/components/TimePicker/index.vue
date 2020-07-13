<template>
  <TextInput
    :ref="'timePicker'"
    :disabled="disabled"
    :error="error"
    :helperText="helperText"
    iconName="time-clock"
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
    placeholder: {
      default: '',
      type: String,
    },
    value: {
      default: '',
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
    this.picker = flatpickr(this.$refs.timePicker.$refs.input, {
      dateFormat: 'h:i K',
      enableTime: true,
      onChange: this.handleInputChange,
      noCalendar: true,
    })
  },
  methods: {
    handleInputChange() {
      this.onValueChange(this.$refs.timePicker.$refs.input.value)
    },
  },
}
</script>
