import TimePicker from '../index'

const Template = (args, { argTypes }) => ({
  components: { TimePicker },
  props: Object.keys(argTypes),
  template: `
    <div class="flex flex-col">
      <TimePicker
        v-bind="$props"
        :maxTime="new Date(maxTime)"
        :minTime="new Date(minTime)"
        :selectedDate="new Date(selectedDate)"
      />
      <div class="mt-6">UTC: {{ new Date(selectedDate).toLocaleString("en-US", { timeZone: "UTC" }) }}</div>
    </div>
  `,
})

export default Template.bind({})
