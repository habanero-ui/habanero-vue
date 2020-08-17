import dividerThickness from '../../../constants/dividerThickness'
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
    dividerThickness: {
      control: {
        type: 'inline-radio',
        options: dividerThickness,
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
