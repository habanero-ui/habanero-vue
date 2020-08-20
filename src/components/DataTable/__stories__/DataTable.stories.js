import { action } from '@storybook/addon-actions'

import sortDirections from '../../../constants/sortDirections'
import DataTable from '../index'
import tableData from './tableData'
export { default as Default } from './DataTableDefault.story'
export { default as CustomCells } from './DataTableCustomCells.story'
export { default as CustomRows } from './DataTableCustomRows.story'
export { default as Sorting } from './DataTableSorting.story'

export default {
  title: 'Components/DataTable',
  component: DataTable,
  argTypes: {
    rowComponent: { table: { disable: true } },
    sortDirection: {
      control: {
        type: 'select',
        options: sortDirections,
      },
    },
  },
  args: {
    onRowSelect: action('onRowSelect'),
    rows: tableData,
  },
  parameters: { layout: 'fullscreen' },
}
