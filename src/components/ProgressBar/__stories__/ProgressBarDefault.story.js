import { number, select } from '@storybook/addon-knobs'
import colors from '../../../constants/colors'
import ProgressBar from '../index'

export default () => ({
  components: { ProgressBar },
  props: {
    color: {
      default: select('color', colors, 'black'),
    },
    value: {
      default: number('value', 20, {
        range: true,
        min: 0,
        max: 100,
        step: 1,
      }),
    },
  },
  template: `
    <div class="flex justify-start p-6">
      <ProgressBar :color="color" :value="value" />
    </div>
  `,
})
