import icons from '../../../constants/icons'
import EmptyState from '../index'
export { default as Default } from './EmptyStateDefault.story'

export default {
  title: 'EmptyState',
  component: EmptyState,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: ['center', 'left', 'right', 'stretch'],
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: icons,
      },
    },
    iconSize: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  args: {
    align: 'center',
    iconName: 'warning',
    iconSize: 'large',
    message: 'A longer descriptive message.',
    title: 'Some Title Text',
  },
}
