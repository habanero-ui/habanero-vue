import { action } from '@storybook/addon-actions'

import icons from '../../../constants/icons'
import iconSides from '../../../constants/iconSides'
import iconSizes from '../../../constants/iconSizes'
import textInputTypes from '../../../constants/textInputTypes'
import TextInput from '../index'
export { default as Default } from './TextInputDefault.story'
export { default as Stateful } from './TextInputStateful.story'

export default {
  title: 'Components/TextInput',
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
        options: iconSizes,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: textInputTypes,
      },
    },
    value: {
      control: {
        type: 'text',
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
    size: 'small',
    type: 'text',
    value: '',
  },
}
