import { action } from '@storybook/addon-actions'

import DatePicker from '../index'
export { default as Default } from './DatePickerDefault.story'
export { default as SingleDate } from './DatePickerSingleDate.story'
export { default as MultiDate } from './DatePickerMultiDate.story'
export { default as RangeDate } from './DatePickerRangeDate.story'

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {
    maxDate: {
      control: {
        type: 'date',
      },
    },
    minDate: {
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
    format: 'm/d/Y',
    helperText: 'Some Helper Text',
    label: 'Some Label Text',
    maxDate: new Date('3000-01-01T00:00:00.000000Z'),
    minDate: new Date('2000-01-01T00:00:00.000000Z'),
    onSelectedDateChange: action('onSelectedDateChange'),
    placeholder: 'Some placeholder text',
    selectedDate: new Date('2017-10-05T17:00:00.000000Z'),
  },
}
