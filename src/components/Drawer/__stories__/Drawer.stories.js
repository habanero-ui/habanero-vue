import { action } from '@storybook/addon-actions'

import Drawer from '../index'
export { default as Default } from './DrawerDefault.story'
export { default as Stateful } from './DrawerStateful.story'

export default {
  title: 'Drawer',
  component: Drawer,
  args: {
    isOpen: true,
    onIsOpenChange: action('onIsOpenChange'),
  },
}
