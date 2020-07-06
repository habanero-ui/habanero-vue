import { select } from '@storybook/addon-knobs'
import colors from '../../../constants/colors'
import Icon from '../index'

export default () => ({
  components: { Icon },
  props: {
    color: {
      default: select('color', colors, 'black'),
    },
  },
  template: `
    <div class="p-6">
      <Icon :color="color" name="badge" />
    </div>
  `,
})
