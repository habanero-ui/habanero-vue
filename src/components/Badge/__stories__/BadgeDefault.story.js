import { select, text } from '@storybook/addon-knobs'

import colors from '../../../constants/colors'
import Badge from '../index'

export default () => ({
  components: { Badge },
  props: {
    color: {
      default: select('color', colors, 'black'),
    },
    text: {
      default: text('text', 'Some Text'),
    },
  },
  template: `
    <div class="flex p-6">
      <Badge
        :color="color"
        :text="text"
      />
    </div>
  `,
})
