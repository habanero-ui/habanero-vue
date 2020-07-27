import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'

import Pagination from '../index'

export default () => ({
  components: { Pagination },
  props: {
    itemCount: {
      default: number('itemCount', 36),
    },
    itemsPerPage: {
      default: number('itemsPerPage', 15),
    },
    selectedPage: {
      default: number('selectedPage', 1),
    },
  },
  template: `
    <div class="p-6">
      <Pagination
        :itemCount="itemCount"
        :itemsPerPage="itemsPerPage"
        :onSelectedPageChange="onSelectedPageChange"
        :selectedPage="selectedPage"
      />
    </div>
  `,
  methods: {
    onSelectedPageChange: action('onSelectedPageChange'),
  },
})
