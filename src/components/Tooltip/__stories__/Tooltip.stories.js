import tooltipPlacements from '../../../constants/tooltipPlacements'
import tooltipTriggers from '../../../constants/tooltipTriggers'
import Tooltip from '../index'
export { default as Default } from './TooltipDefault.story'
export { default as CustomContent } from './TooltipCustomContent.story'

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: tooltipPlacements,
      },
    },
    trigger: {
      control: {
        type: 'select',
        options: tooltipTriggers,
      },
    },
  },
  args: {
    isContentInteractive: false,
    placement: 'top',
    text: 'Drive sober or get pulled over',
    trigger: 'mouseenter focus',
  },
}
