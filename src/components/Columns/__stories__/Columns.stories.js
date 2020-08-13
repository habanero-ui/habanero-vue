import columnWidths from '../../../constants/columnWidths'
import spacingAliases from '../../../constants/spacingAliases'
import verticalAlignments from '../../../constants/verticalAlignments'
import Columns from '../index'
export { default as Default } from './ColumnsDefault.story'

export default {
  title: 'Columns',
  component: Columns,
  argTypes: {
    alignY: {
      control: {
        type: 'select',
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
        options: [undefined, 2.5, ...spacingAliases],
      },
    },
  },
  args: {
    alignY: 'top',
    firstColumnWidth: 'fluid',
    isReversed: false,
    space: 'gutter',
  },
}
