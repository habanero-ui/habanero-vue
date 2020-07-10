import { select } from '@storybook/addon-knobs'

import columnWidths from '../../../constants/columnWidths'
import Column from '../index'

export default () => ({
  components: { Column },
  props: {
    width: {
      default: select('width', columnWidths, 'fluid'),
    },
  },
  template: `
    <div class="p-6"> 
      <Column :width="width">
        Column Content
      </Column>
    </div>
  `,
})
