<template>
  <TextInput
    ref="textInput"
    :disabled="disabled"
    :error="error"
    :helperText="helperText"
    :label="label"
    :placeholder="placeholder"
    :value="value"
  />
</template>

<script>
import flatpickr from 'flatpickr'
import isEqual from 'lodash/isEqual'
import map from 'lodash/map'

import datePickerModes from '../../constants/datePickerModes'
import PropValidation from '../../mixins/PropValidation'
import TextInput from '../TextInput/index'

export default {
  components: {
    TextInput,
  },
  mixins: [
    PropValidation({
      mode: datePickerModes,
    }),
  ],
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
    isCalendarEnabled: {
      default: true,
      type: Boolean,
    },
    isTimeEnabled: {
      default: true,
      type: Boolean,
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
    maxTime: {
      default: null,
      type: [Date, String],
    },
    minDate: {
      default: null,
      type: [Date, String],
    },
    minTime: {
      default: null,
      type: [Date, String],
    },
    mode: {
      default: 'single',
      type: String,
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
      default: undefined,
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

    maxTime() {
      this.updateFlatpickr()
    },

    minDate() {
      this.updateFlatpickr()
    },

    minTime() {
      this.updateFlatpickr()
    },

    selectedDate() {
      if (
        this.selectedDate &&
        this.picker.selectedDates[0] &&
        this.selectedDate.getTime() === this.picker.selectedDates[0].getTime()
      )
        return

      this.picker.setDate(this.selectedDate, false)
    },

    selectedDates() {
      if (
        this.selectedDates &&
        isEqual(
          map(this.selectedDates, (selectedDate) => selectedDate.getTime()),
          map(this.picker.selectedDates, (selectedDate) =>
            selectedDate.getTime(),
          ),
        )
      )
        return

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

      if (this.onValueChange) {
        this.onValueChange(this.$refs.textInput.$refs.input.value)
      }
    },

    updateFlatpickr() {
      this.picker = flatpickr(this.$refs.textInput.$refs.input, {
        dateFormat: this.format,
        enableTime: this.isTimeEnabled,
        maxDate: this.maxDate,
        maxTime: this.maxTime,
        minDate: this.minDate,
        minTime: this.minTime,
        mode: this.mode,
        noCalendar: !this.isCalendarEnabled,
        onChange: this.handleFlatpickrChange,
      })
      this.picker.setDate(this.selectedDate || this.selectedDates, false)
    },
  },
}
</script>
