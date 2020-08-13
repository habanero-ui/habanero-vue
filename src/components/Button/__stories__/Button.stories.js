import buttonVariants from '../../../constants/buttonVariants'
import colors from '../../../constants/colors'
import iconSides from '../../../constants/iconSides'
import Button from '../index'
export { default as Default } from './ButtonDefault.story'
export { default as ColorsAndVariants } from './ButtonColorsAndVariants.story'
export { default as Disabled } from './ButtonDisabled.story'
export { default as Icon } from './ButtonIcon.story'
export { default as IconAndText } from './ButtonIconAndText.story'
export { default as IconSide } from './ButtonIconSide.story'
export { default as IconSize } from './ButtonIconSize.story'
export { default as Loading } from './ButtonLoading.story'
export { default as Size } from './ButtonSize.story'

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
    iconSide: {
      control: {
        type: 'inline-radio',
        options: iconSides,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium'],
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: buttonVariants,
      },
    },
  },
}
