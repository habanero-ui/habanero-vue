import TimePicker from '../index'

export default () => ({
  components: { TimePicker },
  data: () => ({
    maxTime: new Date('2020-01-01T20:00:00.000000Z'),
    minTime: new Date('2020-01-01T06:00:00.000000Z'),
    selectedDate: new Date('2020-01-01T12:00:00.000000Z'),
  }),
  template: `
    <TimePicker
      helperText="Select a time below"
      label="Time"
      :onSelectedDateChange="handleSelectedDateChange"
      :maxTime="maxTime"
      :minTime="minTime"
      placeholder="Select a time"
      :selectedDate="selectedDate"
    />
  `,
  methods: {
    handleSelectedDateChange(selectedDate) {
      this.selectedDate = selectedDate
    },
  },
})
