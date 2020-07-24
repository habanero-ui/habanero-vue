import DatePicker from '../index'

export default () => ({
  components: { DatePicker },
  data: () => ({
    maxDate: new Date(),
    minDate: new Date('1900-01-01'),
    selectedDate: undefined,
  }),
  template: `
    <div class="flex flex-col p-6">
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
    </div>
  `,
  methods: {
    handleSelectedDateChange(selectedDate) {
      this.selectedDate = selectedDate
    },
  },
})
