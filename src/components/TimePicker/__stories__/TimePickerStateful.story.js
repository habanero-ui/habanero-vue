import TimePicker from '../index'

const Template = (args, { argTypes }) => ({
  components: { TimePicker },
  props: Object.keys(argTypes),
  data: () => ({
    selectedDateState: new Date('2020-01-01T12:00:00.000000Z'),
  }),
  template: `
    <TimePicker
      v-bind="$props"
      :maxTime="new Date(maxTime)"
      :minTime="new Date(minTime)"
      :onSelectedDateChange="handleSelectedDateChange"
      :selectedDate="selectedDateState"
    />
  `,
  methods: {
    handleSelectedDateChange(selectedDate) {
      this.selectedDateState = selectedDate
    },
  },
})

const TimePickerStateful = Template.bind({})

TimePickerStateful.argTypes = {
  onSelectedDateChange: { table: { disable: true } },
  selectedDate: { table: { disable: true } },
}

export default TimePickerStateful
