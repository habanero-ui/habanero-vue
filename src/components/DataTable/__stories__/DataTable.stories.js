import sortDirections from '../../../constants/sortDirections'
import DataTable from '../index'
import tableData from './tableData'
export { default as Default } from './DataTableDefault.story'
export { default as CustomCells } from './DataTableCustomCells.story'
export { default as CustomRows } from './DataTableCustomRows.story'
export { default as Sorting } from './DataTableSorting.story'

export default {
  title: 'DataTable',
  component: DataTable,
  argTypes: {
    rowComponent: { table: { disable: true } },
    rows: { table: { disable: true } },
    sortDirection: {
      control: {
        type: 'select',
        options: sortDirections,
      },
    },
  },
  args: {
    rows: tableData,
  },
}
