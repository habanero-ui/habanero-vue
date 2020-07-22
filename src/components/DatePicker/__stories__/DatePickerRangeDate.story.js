import DatePicker from '../index'

export default () => ({
  components: { DatePicker },
  data: () => ({
    selectedDates: undefined,
  }),
  template: `
    <div class="flex flex-col p-6">
      <DatePicker
        helperText="Select the days you will be on vacation"
        label="Vacation Days"
        :onSelectedDatesChange="handleSelectedDatesChange"
        minDate="today"
        mode="range"
        placeholder="Select date range..."
        :selectedDates="selectedDates"
      />
    </div>
  `,
  methods: {
    handleSelectedDatesChange(selectedDates) {
      this.selectedDates = selectedDates
    },
  },
})
