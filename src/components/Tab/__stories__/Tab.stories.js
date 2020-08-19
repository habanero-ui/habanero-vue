import { action } from '@storybook/addon-actions'

import colors from '../../../constants/colors'
import Tab from '../index'
export { default as Default } from './TabDefault.story'

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    badgeColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
  },
  args: {
    badgeColor: 'error',
    badgeText: '',
    disabled: false,
    isBadgeVisible: false,
    isSelected: true,
    name: 'a',
    onSelect: action('onSelect'),
    text: 'Text',
  },
}
