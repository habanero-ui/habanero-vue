import { select } from '@storybook/addon-knobs'
import columnWidths from '../../../constants/columnWidths'
import Columns from '../index'

export default () => ({
  components: { Columns },
  props: {
    width: {
      default: select('width', columnWidths, 'fluid'),
    },
  },
  template: `
    <div class="p-6"> 
      <Columns :width="width">
        Columns Content
      </Columns>
    </div>
  `,
})
