import colors from '../../../constants/colors'
import ProgressBar from '../index'
export { default as Default } from './ProgressBarDefault.story'

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    max: {
      control: 'number',
    },
    min: {
      control: 'number',
    },
  },
  args: {
    color: 'none',
    max: 100,
    min: 0,
    value: 35,
  },
}
