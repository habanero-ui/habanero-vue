import spacingAliases from '../../../constants/spacingAliases'
import Stack from '../index'
export { default as Default } from './StackDefault.story'

export default {
  title: 'Stack',
  component: Stack,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: ['center', 'left', 'right', 'stretch'],
      },
    },
    space: {
      control: {
        type: 'select',
        options: [undefined, 2.5, ...spacingAliases],
      },
    },
  },
  args: {
    align: 'stretch',
    showDividers: false,
    space: '',
  },
}
