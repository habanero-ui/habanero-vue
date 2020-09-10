import { action } from '@storybook/addon-actions'

import drawerModes from '../../../constants/drawerModes'
import drawerPositions from '../../../constants/drawerPositions'
import Drawer from '../index'
export { default as Default } from './DrawerDefault.story'
export { default as Stateful } from './DrawerStateful.story'

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    mode: {
      control: {
        type: 'inline-radio',
        options: drawerModes,
      },
    },
    position: {
      control: {
        type: 'inline-radio',
        options: drawerPositions,
      },
    },
  },
  args: {
    isOpen: true,
    mode: 'cover',
    onIsOpenChange: action('onIsOpenChange'),
    position: 'left',
  },
}
