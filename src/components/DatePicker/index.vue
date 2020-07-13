<template>
  <TextInput
    ref="datePicker"
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
import includes from 'lodash/includes'

import datePickerModes from '../../constants/datePickerModes'
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
      type: String,
    },
    minDate: {
      default: null,
      type: String,
    },
    mode: {
      default: 'single',
      type: String,
      validator: getIsModeValid,
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
    this.picker = flatpickr(this.$refs.datePicker.$refs.input, {
      dateFormat: 'm/d/Y',
      enableTime: false,
      maxDate: this.maxDate,
      minDate: this.minDate,
      mode: this.mode,
      onChange: this.handleInputChange,
    })
  },
  methods: {
    handleInputChange() {
      this.onValueChange(this.$refs.datePicker.$refs.input.value)
    },
  },
}

function getIsModeValid(value) {
  const isValid = includes(datePickerModes, value)

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.error(
      'DatePicker: The "mode" prop must be one of the following:',
      String(datePickerModes),
    )
  }

  return isValid
}
</script>
