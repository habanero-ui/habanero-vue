import { action } from '@storybook/addon-actions'

import RadioGroup from '../index'
export { default as Default } from './RadioGroupDefault.story'
export { default as Stateful } from './RadioGroupStateful.story'

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  args: {
    error: '',
    helperText: '',
    label: 'Label Text',
    onValueChange: action('onValueChange'),
    value: 'a',
  },
}
