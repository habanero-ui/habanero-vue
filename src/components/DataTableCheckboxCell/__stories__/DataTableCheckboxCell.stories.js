import { action } from '@storybook/addon-actions'

import DataTableCheckboxCell from '../index'
export { default as Default } from './DataTableCheckboxCellDefault.story'

export default {
  title: 'DataTableCheckboxCell',
  component: DataTableCheckboxCell,
  args: {
    column: {
      key: 'isChecked',
      onIsCheckedChange: action('onIsCheckedChange'),
    },
    row: { id: 0, isChecked: true },
  },
}
