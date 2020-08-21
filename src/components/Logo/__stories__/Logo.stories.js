import colors from '../../../constants/colors'
import Logo from '../index'
export { default as Default } from './LogoDefault.story'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
  },
  args: {
    color: 'black',
    colorIsBackground: false,
  },
}
