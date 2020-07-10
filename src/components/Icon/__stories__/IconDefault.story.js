import { select } from '@storybook/addon-knobs'

import colors from '../../../constants/colors'
import Icon from '../index'

export default () => ({
  components: { Icon },
  props: {
    color: {
      default: select('color', colors, 'black'),
    },
    size: {
      default: select(
        'size',
        {
          small: 'small',
          medium: 'medium',
          large: 'large',
        },
        'medium',
      ),
    },
  },
  template: `
    <div class="p-6">
      <Icon :color="color" :size="size" name="badge" />
    </div>
  `,
})
