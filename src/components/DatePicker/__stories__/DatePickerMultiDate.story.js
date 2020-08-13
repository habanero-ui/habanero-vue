import DatePicker from '../index'

export default () => ({
  components: { DatePicker },
  data: () => ({
    selectedDates: undefined,
  }),
  template: `
    <DatePicker
      helperText="Select the days you were absent"
      label="Absences"
      :onSelectedDatesChange="handleSelectedDatesChange"
      maxDate="today"
      mode="multiple"
      placeholder="Select days..."
      :selectedDates="selectedDates"
    />
  `,
  methods: {
    handleSelectedDatesChange(selectedDates) {
      this.selectedDates = selectedDates
    },
  },
})
