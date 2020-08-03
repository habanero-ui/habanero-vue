import { select, text } from '@storybook/addon-knobs'

import placements from '../../../constants/tooltipPlacements'
import triggers from '../../../constants/tooltipTriggers'
import Typography from '../../Typography/index'
import Tooltip from '../index'

export default () => ({
  components: { Tooltip, Typography },
  props: {
    placement: {
      default: select('placement', placements, 'top'),
    },
    text: {
      default: text('text', 'Drive sober or get pulled over'),
    },
    trigger: {
      default: select('trigger', triggers, 'mouseenter focus'),
    },
  },
  template: `
    <div class="absolute inset-0 flex items-center justify-center">
      <Tooltip :placement="placement" :text="text" :trigger="trigger">
        <Typography>Hover Me!</Typography>
      </Tooltip>
    </div>
  `,
})
