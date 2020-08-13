import { action } from '@storybook/addon-actions'

import DataTableCheckboxCell from '../index'

export default () => ({
  components: { DataTableCheckboxCell },
  data: () => ({
    row: { id: 0, text: 'Some Text' },
  }),
  template: `
    <DataTableCheckboxCell
      :column="{ onIsCheckedChange }"
      :row="row"
    />
  `,
  methods: {
    onIsCheckedChange: action('onIsCheckedChange'),
  },
})
