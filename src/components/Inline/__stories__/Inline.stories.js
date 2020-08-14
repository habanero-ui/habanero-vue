import spacingAliases from '../../../constants/spacingAliases'
import verticalAlignments from '../../../constants/verticalAlignments'
import Inline from '../index'
export { default as Default } from './InlineDefault.story'

export default {
  title: 'Inline',
  component: Inline,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: ['center', 'left', 'right'],
      },
    },
    alignY: {
      control: {
        type: 'inline-radio',
        options: verticalAlignments,
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
    align: 'left',
    alignY: 'stretch',
    space: '',
  },
}
