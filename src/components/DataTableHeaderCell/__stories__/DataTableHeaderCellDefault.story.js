import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'

import sortDirections from '../../../constants/sortDirections'
import DataTableHeaderCell from '../index'

export default () => ({
  components: { DataTableHeaderCell },
  props: {
    isSortable: {
      default: boolean('isSortable', true),
    },
    keyProp: {
      default: text('key', 'my_column'),
    },
    name: {
      default: text('name', 'Some Text'),
    },
    sortBy: {
      default: text('sortBy', 'my_column'),
    },
    sortDirection: {
      default: select('sortDirection', sortDirections, 'asc'),
    },
  },
  computed: {
    column() {
      return {
        key: this.keyProp,
        isSortable: this.isSortable,
        name: this.name,
      }
    },
  },
  template: `
    <div class="flex p-6"> 
      <DataTableHeaderCell
        :column="column"
        :onSortByChange="onSortByChange"
        :onSortDirectionChange="onSortDirectionChange"
        :sortBy="sortBy"
        :sortDirection="sortDirection"
      />
    </div>
  `,
  methods: {
    onSortByChange: action('onSortByChange'),
    onSortDirectionChange: action('onSortDirectionChange'),
  },
})
