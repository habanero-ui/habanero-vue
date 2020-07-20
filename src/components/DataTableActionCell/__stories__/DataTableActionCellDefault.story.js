import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'

import icons from '../../../constants/icons'
import DataTableActionCell from '../index'

export default () => ({
  components: { DataTableActionCell },
  props: {
    iconName: {
      default: select('iconName', icons, 'close'),
    },
    iconSize: {
      default: select(
        'iconSize',
        ['auto', 'small', 'medium', 'large'],
        'medium',
      ),
    },
  },
  data: () => ({
    row: { id: 0, text: 'Some Text' },
  }),
  template: `
    <div class="w-40 p-6"> 
      <DataTableActionCell
        :column="{ iconName, iconSize, onClick }"
        :row="row"
      />
    </div>
  `,
  methods: {
    onClick: action('onClick'),
  },
})
