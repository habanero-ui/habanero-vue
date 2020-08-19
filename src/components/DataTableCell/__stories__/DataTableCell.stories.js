import DataTableCell from '../index'
export { default as Default } from './DataTableCellDefault.story'

export default {
  title: 'Components/DataTableCell',
  component: DataTableCell,
  args: {
    column: {
      key: 'text',
    },
    row: { id: 0, text: 'Some Text' },
  },
}
