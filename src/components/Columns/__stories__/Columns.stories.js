import columnWidths from '../../../constants/columnWidths'
import spacingAliases from '../../../constants/spacingAliases'
import verticalAlignments from '../../../constants/verticalAlignments'
import Columns from '../index'
export { default as Default } from './ColumnsDefault.story'

export default {
  title: 'Components/Columns',
  component: Columns,
  argTypes: {
    alignY: {
      control: {
        type: 'inline-radio',
        options: verticalAlignments,
      },
    },
    firstColumnWidth: {
      name: 'First Column width',
      control: {
        type: 'select',
        options: columnWidths,
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
    alignY: 'top',
    firstColumnWidth: 'fluid',
    isReversed: false,
    space: 'gutter',
  },
  parameters: { layout: 'padded' },
}
