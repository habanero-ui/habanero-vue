import { select, text } from '@storybook/addon-knobs'

import placements from '../../../constants/tooltipPlacements'
import Tooltip from '../index'

export default () => ({
  components: { Tooltip },
  props: {
    placement: {
      default: select('placement', placements, 'bottom'),
    },
    tooltip: {
      default: text(
        'tooltip',
        '<ul><li>Drive sober or get pulled over</li></ul>',
      ),
    },
  },
  template: `
    <div class="flex justify-start p-6">
      <Tooltip :placement="placement">
        <template slot="target">
          <div>I'm a tooltip, hover over me</div>
        </template>
        <template slot="tooltip">{{ tooltip }}</template>
      </Tooltip>
    </div>
  `,
})
