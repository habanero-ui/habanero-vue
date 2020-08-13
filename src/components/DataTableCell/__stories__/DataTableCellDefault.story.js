import { text } from '@storybook/addon-knobs'

import DataTableCell from '../index'

export default () => ({
  components: { DataTableCell },
  props: {
    keyProp: {
      default: text('key', 'text'),
    },
  },
  data: () => ({
    row: { id: 0, text: 'Some Text' },
  }),
  computed: {
    column() {
      return {
        key: this.keyProp,
      }
    },
  },
  template: `
    <DataTableCell
      :column="column"
      :row="row"
    />
  `,
})
