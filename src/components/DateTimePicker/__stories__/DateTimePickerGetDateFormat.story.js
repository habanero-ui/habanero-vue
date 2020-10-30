import spacetime from 'spacetime'

import DateTimePicker from '../index'

const Template = (args, { argTypes }) => ({
  components: { DateTimePicker },
  props: Object.keys(argTypes),
  template: `
    <div class="flex flex-col max-w-xs w-screen">
      <DateTimePicker
        v-bind="$props"
        :maxDate="new Date(maxDate)"
        :minDate="new Date(minDate)"
        :selectedDate="new Date(selectedDate)"
      />
    </div>
  `,
})

const DateTimePickerGetDateFormat = Template.bind({})

DateTimePickerGetDateFormat.argTypes = {
  format: { table: { disable: true } },
}

DateTimePickerGetDateFormat.args = {
  getDateFormat: (date) => {
    const start = spacetime(date).startOf('week')
    const end = spacetime(date).endOf('week')

    return `${start.format('numeric-us')} - ${end.format('numeric-us')}`
  },
}

export default DateTimePickerGetDateFormat
