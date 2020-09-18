import { action } from '@storybook/addon-actions'

import MoneyInput from '../index'
export { default as Default } from './MoneyInputDefault.story'
export { default as Stateful } from './MoneyInputStateful.story'

export default {
  title: 'Components/MoneyInput',
  component: MoneyInput,
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium'],
      },
    },
  },
  args: {
    cents: 10000,
    disabled: false,
    error: '',
    helperText: 'Enter the amount of money you want for Christmas.',
    label: 'North Pole Cash Request',
    onCentsChange: action('onCentsChange'),
    size: 'medium',
  },
}
