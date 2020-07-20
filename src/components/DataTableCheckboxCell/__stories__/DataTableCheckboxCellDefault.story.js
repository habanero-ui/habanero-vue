import { action } from '@storybook/addon-actions'

import DataTableCheckboxCell from '../index'

export default () => ({
  components: { DataTableCheckboxCell },
  data: () => ({
    row: { id: 0, text: 'Some Text' },
  }),
  template: `
    <div class="w-40 p-6"> 
      <DataTableCheckboxCell
        :column="{ onIsCheckedChange }"
        :row="row"
      />
    </div>
  `,
  methods: {
    onIsCheckedChange: action('onIsCheckedChange'),
  },
})
