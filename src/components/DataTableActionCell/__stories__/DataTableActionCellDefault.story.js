import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'

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
    isVisible: {
      default: boolean('isVisible', true),
    },
  },
  data: () => ({
    row: { id: 0, text: 'Some Text' },
  }),
  computed: {
    column() {
      return {
        getIsVisible: () => this.isVisible,
        iconName: this.iconName,
        iconSize: this.iconSize,
        onClick: this.onClick,
      }
    },
  },
  template: `
    <div class="w-40 p-6"> 
      <DataTableActionCell
        :column="column"
        :row="row"
      />
    </div>
  `,
  methods: {
    onClick: action('onClick'),
  },
})
