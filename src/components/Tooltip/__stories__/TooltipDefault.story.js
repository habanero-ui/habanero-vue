import { select } from '@storybook/addon-knobs'

import placements from '../../../constants/tooltipPlacements'
import Tooltip from '../index'

export default () => ({
  components: { Tooltip },
  props: {
    placement: {
      default: select('placement', placements, 'top'),
    },
  },
  template: `
    <div>
      <Tooltip :placement="placement" />
    </div>
  `,
})
