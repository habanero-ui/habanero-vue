import DatePicker from '../index'

const Template = (args, { argTypes }) => ({
  components: { DatePicker },
  props: Object.keys(argTypes),
  data: () => ({
    selectedDates: undefined,
  }),
  template: `
    <div class="flex flex-col">
      <DatePicker
        v-bind="$props"
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

const DatePickerMultiDate = Template.bind({})

DatePickerMultiDate.argTypes = {
  helperText: { table: { disable: true } },
  label: { table: { disable: true } },
  mode: { table: { disable: true } },
  maxDate: { table: { disable: true } },
  minDate: { table: { disable: true } },
  onSelectedDateChange: { table: { disable: true } },
  placeholder: { table: { disable: true } },
  selectedDate: { table: { disable: true } },
}

export default DatePickerMultiDate
