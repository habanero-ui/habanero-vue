import DatePicker from '../index'

const Template = (args, { argTypes }) => ({
  components: { DatePicker },
  props: Object.keys(argTypes),
  data: () => ({
    selectedDateState: undefined,
  }),
  template: `
    <div class="flex flex-col">
      <DatePicker
        v-bind="$props"
        helperText="Select your birthday"
        label="Birthday"
        :maxDate="new Date(maxDate)"
        :minDate="new Date(minDate)"
        mode="single"
        :onSelectedDateChange="handleSelectedDateChange"
        placeholder="mm/dd/yyyy"
        :selectedDate="selectedDateState"
      />
    </div>
  `,
  methods: {
    handleSelectedDateChange(selectedDate) {
      this.selectedDateState = selectedDate
    },
  },
})

const DatePickerSingleDate = Template.bind({})

DatePickerSingleDate.argTypes = {
  helperText: { table: { disable: true } },
  label: { table: { disable: true } },
  mode: { table: { disable: true } },
  onSelectedDateChange: { table: { disable: true } },
  placeholder: { table: { disable: true } },
  selectedDate: { table: { disable: true } },
}

DatePickerSingleDate.args = {
  maxDate: new Date(),
  minDate: new Date('1900-01-01'),
}

export default DatePickerSingleDate
