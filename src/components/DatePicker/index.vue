<template>
  <TextInput
    ref="dateTimePicker"
    :disabled="disabled"
    :error="error"
    :helperText="helperText"
    iconName="calendar-date"
    iconSide="right"
    iconSize="small"
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
    format: {
      default: 'm/d/Y',
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
    onSelectedDateChange: {
      default: undefined,
      type: Function,
    },
    onSelectedDatesChange: {
      default: undefined,
      type: Function,
    },
    onValueChange: {
      default: undefined,
      type: Function,
    },
    maxDate: {
      default: null,
      type: [Date, String],
    },
    minDate: {
      default: null,
      type: [Date, String],
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
    selectedDate: {
      default: undefined,
      type: Date,
    },
    selectedDates: {
      default: undefined,
      type: Array,
    },
    value: {
      default: null,
      type: String,
    },
  },
  data: () => ({
    picker: null,
  }),
  watch: {
    format() {
      this.updateFlatpickr()
    },

    maxDate() {
      this.updateFlatpickr()
    },

    minDate() {
      this.updateFlatpickr()
    },

    selectedDate() {
      this.picker.setDate(this.selectedDate, false)
    },

    selectedDates() {
      this.picker.setDate(this.selectedDates, false)
    },
  },
  beforeDestroy() {
    if (this.picker) {
      this.picker.destroy()
    }
  },
  mounted() {
    this.updateFlatpickr()
  },
  methods: {
    handleFlatpickrChange(selectedDates) {
      if (this.onValueChange) {
        this.onValueChange(this.$refs.dateTimePicker.$refs.input.value)
      }

      if (this.mode === 'single' && this.onSelectedDateChange) {
        this.picker.setDate(this.selectedDate, false)
        this.onSelectedDateChange(selectedDates[0])
      }

      if (
        (this.mode === 'multiple' || this.mode === 'range') &&
        this.onSelectedDatesChange
      ) {
        this.picker.setDate(this.selectedDates, false)
        this.onSelectedDatesChange(selectedDates)
      }
    },

    updateFlatpickr() {
      this.picker = flatpickr(this.$refs.dateTimePicker.$refs.input, {
        dateFormat: this.format,
        defaultDate: this.selectedDate,
        enableTime: false,
        maxDate: this.maxDate,
        minDate: this.minDate,
        mode: this.mode,
        onChange: this.handleFlatpickrChange,
      })
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
