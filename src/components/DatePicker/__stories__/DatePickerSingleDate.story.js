import DatePicker from '../index'

export default () => ({
  components: { DatePicker },
  data: () => ({
    maxDate: new Date(),
    minDate: new Date('1900-01-01'),
    selectedDate: undefined,
  }),
  template: `
    <DatePicker
      helperText="Select your birthday"
      label="Birthday"
      :onSelectedDateChange="handleSelectedDateChange"
      :maxDate="maxDate"
      :minDate="minDate"
      mode="single"
      placeholder="mm/dd/yyyy"
      :selectedDate="selectedDate"
    />
  `,
  methods: {
    handleSelectedDateChange(selectedDate) {
      this.selectedDate = selectedDate
    },
  },
})
