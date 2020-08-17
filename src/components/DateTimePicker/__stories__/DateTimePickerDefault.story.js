import DateTimePicker from '../index'

const Template = (args, { argTypes }) => ({
  components: { DateTimePicker },
  props: Object.keys(argTypes),
  template: `
    <div class="flex flex-col">
      <DateTimePicker
        v-bind="$props"
        :maxDate="new Date(maxDate)"
        :minDate="new Date(minDate)"
        :selectedDate="new Date(selectedDate)"
      />
      <div class="mt-6">UTC: {{ new Date(selectedDate).toLocaleString("en-US", { timeZone: "UTC" }) }}</div>
    </div>
  `,
})

export default Template.bind({})
