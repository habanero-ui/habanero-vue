import colors from '../../../constants/colors'
import icons from '../../../constants/icons'
import Icon from '../index'
export { default as Default } from './IconDefault.story'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    name: {
      control: {
        type: 'select',
        options: [undefined, ...icons],
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  args: {
    color: 'black',
    colorIsBackground: false,
    name: 'bell',
    size: 'medium',
  },
}
