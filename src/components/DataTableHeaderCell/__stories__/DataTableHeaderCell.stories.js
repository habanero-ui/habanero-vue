import { action } from '@storybook/addon-actions'

import sortDirections from '../../../constants/sortDirections'
import DataTableHeaderCell from '../index'
export { default as Default } from './DataTableHeaderCellDefault.story'

export default {
  title: 'Components/DataTableHeaderCell',
  component: DataTableHeaderCell,
  argTypes: {
    sortDirection: {
      control: {
        type: 'select',
        options: sortDirections,
      },
    },
  },
  args: {
    column: {
      key: 'my_column',
      isSortable: true,
      name: 'My Column',
    },
    sortBy: 'my_column',
    sortDirection: 'asc',
    onSortByChange: action('onSortByChange'),
    onSortDirectionChange: action('onSortDirectionChange'),
  },
}
