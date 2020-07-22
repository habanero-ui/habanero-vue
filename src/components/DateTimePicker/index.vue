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
      default: 'm/d/Y h:i K',
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
    placeholder: {
      default: '',
      type: String,
    },
    selectedDate: {
      default: undefined,
      type: Date,
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
    onValueChange() {
      this.updateFlatpickr()
    },
    selectedDate() {
      this.picker.setDate(this.selectedDate, false)
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

      if (this.onSelectedDateChange) {
        this.picker.setDate(this.selectedDate, false)
        this.onSelectedDateChange(selectedDates[0])
      }
    },

    updateFlatpickr() {
      this.picker = flatpickr(this.$refs.dateTimePicker.$refs.input, {
        dateFormat: this.format,
        defaultDate: this.selectedDate,
        enableTime: true,
        maxDate: this.maxDate,
        minDate: this.minDate,
        onChange: this.handleFlatpickrChange,
      })
    },
  },
}
</script>
