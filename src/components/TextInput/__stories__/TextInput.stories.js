import { action } from '@storybook/addon-actions'

import icons from '../../../constants/icons'
import iconSides from '../../../constants/iconSides'
import textInputTypes from '../../../constants/textInputTypes'
import TextInput from '../index'
export { default as Default } from './TextInputDefault.story'
export { default as Stateful } from './TextInputStateful.story'

export default {
  title: 'TextInput',
  component: TextInput,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: icons,
      },
    },
    iconSide: {
      control: {
        type: 'inline-radio',
        options: iconSides,
      },
    },
    iconSize: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: textInputTypes,
      },
    },
  },
  args: {
    disabled: false,
    error: '',
    helperText: 'Enter your name as it appears on your birth certificate',
    iconName: '',
    iconSide: 'left',
    iconSize: 'medium',
    label: 'Legal Name',
    onIconClick: action('onIconClick'),
    onValueChange: action('onValueChange'),
    placeholder: 'John Michael Doe',
    type: 'text',
    value: '',
  },
}
