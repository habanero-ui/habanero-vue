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
    <Pagination
      v-bind="$props"
      :onSelectedPageChange="onSelectedPageChange"
    />
  `,
  methods: {
    onSelectedPageChange: action('onSelectedPageChange'),
  },
})
