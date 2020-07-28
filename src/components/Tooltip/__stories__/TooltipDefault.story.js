import { select } from '@storybook/addon-knobs'

import placements from '../../../constants/tooltipPlacements'
import Tooltip from '../index'

export default () => ({
  components: { Tooltip },
  props: {
    placement: {
      default: select('placement', placements, 'bottom'),
    },
  },
  template: `
    <div class="flex justify-start p-6">
      <Tooltip :placement="placement">
        <template slot="target"><button>I'm a tooltip, hover over me</button></template>
        <template slot="tooltip">Drive sober or get pulled over</template>
      </Tooltip>
    </div>
  `,
})
