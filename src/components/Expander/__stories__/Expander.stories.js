import { action } from '@storybook/addon-actions'

import spacingAliases from '../../../constants/spacingAliases'
import Expander from '../index'
export { default as Default } from './ExpanderDefault.story'

export default {
  title: 'Expander',
  component: Expander,
  argTypes: {
    headerPaddingX: {
      control: {
        type: 'select',
        options: [2.5, ...spacingAliases],
      },
    },
  },
  args: {
    headerPaddingX: 'gutter',
    isOpen: false,
    onIsOpenChange: action('onIsOpenChange'),
    text: 'Some Text',
  },
}
