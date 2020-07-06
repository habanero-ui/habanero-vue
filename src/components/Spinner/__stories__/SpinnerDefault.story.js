import { select } from '@storybook/addon-knobs'
import colors from '../../../constants/colors'
import Spinner from '../index'

export default () => ({
  components: { Spinner },
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
      <Spinner :color="color" :size="size" />
    </div>
  `,
})
