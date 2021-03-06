<template>
  <TextInput
    ref="textInput"
    :disabled="disabled"
    :error="error"
    :helperText="helperText"
    :label="label"
    :placeholder="placeholder"
    :size="size"
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
      default: undefined,
      type: String,
    },
    getDateFormat: {
      default: undefined,
      type: Function,
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
    size: {
      default: undefined,
      type: String,
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
      if (!this.picker) return

      const dateFormat = this.format || 'm/d/Y h:i K'

      this.picker.set('dateFormat', this.getDateFormat ? undefined : dateFormat)
    },

    getDateFormat() {
      if (!this.picker) return

      this.picker.set('formatDate', this.getDateFormat)
    },

    maxDate() {
      if (!this.picker) return

      this.picker.set('maxDate', this.maxDate)
    },

    maxTime() {
      if (!this.picker) return

      this.picker.set('maxTime', this.maxTime)
    },

    minDate() {
      if (!this.picker) return

      this.picker.set('minDate', this.minDate)
    },

    minTime() {
      if (!this.picker) return

      this.picker.set('minTime', this.minTime)
    },

    selectedDate() {
      if (
        !this.picker ||
        (this.selectedDate &&
          this.picker.selectedDates[0] &&
          this.selectedDate.getTime() ===
            this.picker.selectedDates[0].getTime())
      )
        return

      this.picker.setDate(this.selectedDate, false)
    },

    selectedDates() {
      if (
        !this.picker ||
        (this.selectedDates &&
          isEqual(
            map(this.selectedDates, (selectedDate) => selectedDate.getTime()),
            map(this.picker.selectedDates, (selectedDate) =>
              selectedDate.getTime(),
            ),
          ))
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
    const dateFormat = this.format || 'm/d/Y h:i K'

    this.picker = flatpickr(this.$refs.textInput.$refs.input, {
      dateFormat: this.getDateFormat ? undefined : dateFormat,
      enableTime: this.isTimeEnabled,
      formatDate: this.getDateFormat,
      maxDate: this.maxDate,
      maxTime: this.maxTime,
      minDate: this.minDate,
      minTime: this.minTime,
      mode: this.mode,
      monthSelectorType: 'static',
      noCalendar: !this.isCalendarEnabled,
      onClose: this.handleFlatpickrChange,
    })

    this.picker.setDate(this.selectedDate || this.selectedDates, false)
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
  },
}
</script>

<style>
.flatpickr-calendar:before,
.flatpickr-calendar:after {
  @apply hidden;
}
.flatpickr-innerContainer {
  @apply border-black border-b border-l border-r rounded-b-md;
}

/* Month */
.flatpickr-months {
  @apply border-black border-l border-r border-t rounded-t-md;
}
.flatpickr-months .flatpickr-month,
.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month,
.flatpickr-current-month {
  height: 56px;
}
.flatpickr-months .flatpickr-prev-month,
.flatpickr-months .flatpickr-next-month {
  padding: 25px 10px;
}
.flatpickr-months .flatpickr-prev-month:hover svg,
.flatpickr-months .flatpickr-next-month:hover svg {
  fill: #484848;
}
.flatpickr-months .flatpickr-month {
  @apply bg-white;
}
.flatpickr-current-month {
  font-size: 110%;
  padding: 16px 0 0 0;
  @apply leading-loose;
}
.flatpickr-current-month span.cur-month {
  color: #5a6171;
  @apply font-medium;
}
.flatpickr-current-month input.cur-year {
  @apply font-medium;
}
.flatpickr-current-month .flatpickr-monthDropdown-months {
  @apply bg-transparent;
}

/* Week */
.flatpickr-weekdays {
  height: 36px;
  @apply bg-white;
}
span.flatpickr-weekday {
  font-size: 80%;
  @apply font-medium bg-transparent;
}

/* Day */
.flatpickr-days {
  @apply border-l-0 border-r-0 border-t;
}
.flatpickr-day {
  line-height: 38px;
}
.flatpickr-day.selected,
.flatpickr-day.startRange,
.flatpickr-day.endRange,
.flatpickr-day.selected.inRange,
.flatpickr-day.startRange.inRange,
.flatpickr-day.endRange.inRange,
.flatpickr-day.selected:focus,
.flatpickr-day.startRange:focus,
.flatpickr-day.endRange:focus,
.flatpickr-day.selected:hover,
.flatpickr-day.startRange:hover,
.flatpickr-day.endRange:hover,
.flatpickr-day.selected.prevMonthDay,
.flatpickr-day.startRange.prevMonthDay,
.flatpickr-day.endRange.prevMonthDay,
.flatpickr-day.selected.nextMonthDay,
.flatpickr-day.startRange.nextMonthDay,
.flatpickr-day.endRange.nextMonthDay {
  @apply bg-info border-info;
}
.flatpickr-day.today {
  @apply border-transparent;
}
.flatpickr-day.today:hover,
.flatpickr-day.today:focus {
  background: #e2e2e2;
  border-color: #e2e2e2;
  color: #484848;
}
span.flatpickr-day.selected {
  @apply font-normal;
}

/* Time */
.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {
  border-bottom: 1px solid;
}
.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {
  margin-top: 2px;
  @apply border-black border rounded-md;
}

/* IE11 fix for flatpickr */
@media all and (-ms-high-contrast: none) {
  span.flatpickr-day {
    flex: 1 0 auto;
    width: 43px;
  }
}
</style>
