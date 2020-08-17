import dividerThickness from '../../../constants/dividerThickness'
import Divider from '../index'
export { default as Default } from './DividerDefault.story'

export default {
  title: 'Divider',
  component: Divider,
  argTypes: {
    thickness: {
      control: {
        type: 'inline-radio',
        options: dividerThickness,
      },
    },
  },
  args: {
    thickness: 'regular',
  },
}
