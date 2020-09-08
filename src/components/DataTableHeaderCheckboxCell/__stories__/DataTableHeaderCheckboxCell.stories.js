import { action } from '@storybook/addon-actions'

import DataTableHeaderCheckboxCell from '../index'
export { default as Default } from './DataTableHeaderCheckboxCellDefault.story'

export default {
  title: 'Components/DataTableHeaderCheckboxCell',
  component: DataTableHeaderCheckboxCell,
  args: {
    column: {
      headerIsChecked: true,
      name: '',
      onHeaderIsCheckedChange: action('onHeaderIsCheckedChange'),
    },
  },
}
