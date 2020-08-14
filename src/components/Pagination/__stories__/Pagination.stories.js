import { action } from '@storybook/addon-actions'

import Pagination from '../index'
export { default as Default } from './PaginationDefault.story'

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    itemCount: 36,
    itemsPerPage: 15,
    onSelectedPageChange: action('onSelectedPageChange'),
    selectedPage: 1,
  },
}
