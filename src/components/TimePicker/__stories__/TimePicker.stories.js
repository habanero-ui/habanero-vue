import { action } from '@storybook/addon-actions'

import TimePicker from '../index'
export { default as Default } from './TimePickerDefault.story'
export { default as Stateful } from './TimePickerStateful.story'

export default {
  title: 'Components/TimePicker',
  component: TimePicker,
  argTypes: {
    maxTime: {
      control: {
        type: 'date',
      },
    },
    minTime: {
      control: {
        type: 'date',
      },
    },
    selectedDate: {
      control: {
        type: 'date',
      },
    },
  },
  args: {
    disabled: false,
    error: '',
    format: 'h:i K',
    helperText: 'Some Helper Text',
    label: 'Some Label Text',
    maxTime: new Date('2020-01-01T20:00:00.000000Z'),
    minTime: new Date('2020-01-01T06:00:00.000000Z'),
    onSelectedDateChange: action('onSelectedDateChange'),
    placeholder: 'Some placeholder text',
    selectedDate: new Date('2020-01-01T17:00:00.000000Z'),
  },
}
