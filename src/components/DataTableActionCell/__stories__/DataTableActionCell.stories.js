import { action } from '@storybook/addon-actions'

import DataTableActionCell from '../index'
export { default as Default } from './DataTableActionCellDefault.story'

export default {
  title: 'Components/DataTableActionCell',
  component: DataTableActionCell,
  args: {
    column: {
      getIsVisible: () => true,
      iconName: 'close',
      onClick: action('onClick'),
    },
    row: { id: 0, text: 'Some Text' },
  },
}
