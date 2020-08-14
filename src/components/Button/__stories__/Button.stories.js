import buttonVariants from '../../../constants/buttonVariants'
import colors from '../../../constants/colors'
import icons from '../../../constants/icons'
import iconSides from '../../../constants/iconSides'
import typographyVariants from '../../../constants/typographyVariants'
import Button from '../index'
export { default as Default } from './ButtonDefault.story'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: [undefined, ...icons],
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
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium'],
      },
    },
    textVariant: {
      control: {
        type: 'select',
        options: typographyVariants,
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: buttonVariants,
      },
    },
  },
  args: {
    disabled: false,
    isLoading: false,
    text: 'Text',
  },
}
