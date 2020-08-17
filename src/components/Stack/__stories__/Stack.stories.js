import spacingAliases from '../../../constants/spacingAliases'
import stackAlignments from '../../../constants/stackAlignments'
import Stack from '../index'
export { default as Default } from './StackDefault.story'

export default {
  title: 'Stack',
  component: Stack,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: stackAlignments,
      },
    },
    space: {
      control: {
        type: 'select',
        options: [2.5, ...spacingAliases],
      },
    },
  },
  args: {
    align: 'stretch',
    showDividers: false,
    space: '',
  },
}
