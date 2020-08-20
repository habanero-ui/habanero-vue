import colors from '../../../constants/colors'
import typographyVariants from '../../../constants/typographyVariants'
import Typography from '../index'
export { default as Default } from './TypographyDefault.story'

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: typographyVariants,
      },
    },
  },
  args: {
    color: 'black',
    colorIsBackground: false,
    component: 'span',
    text: 'The quick brown fox jumps over the lazy dog',
    variant: 'body-large',
  },
}
