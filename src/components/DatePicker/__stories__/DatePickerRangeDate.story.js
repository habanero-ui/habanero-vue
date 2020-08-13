import DatePicker from '../index'

export default () => ({
  components: { DatePicker },
  data: () => ({
    selectedDates: undefined,
  }),
  template: `
    <DatePicker
      helperText="Select the days you will be on vacation"
      label="Vacation Days"
      :onSelectedDatesChange="handleSelectedDatesChange"
      minDate="today"
      mode="range"
      placeholder="Select date range..."
      :selectedDates="selectedDates"
    />
  `,
  methods: {
    handleSelectedDatesChange(selectedDates) {
      this.selectedDates = selectedDates
    },
  },
})
