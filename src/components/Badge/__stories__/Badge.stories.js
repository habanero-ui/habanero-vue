import colors from '../../../constants/colors'
import Badge from '../index'
export { default as Default } from './BadgeDefault.story'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
  },
}
