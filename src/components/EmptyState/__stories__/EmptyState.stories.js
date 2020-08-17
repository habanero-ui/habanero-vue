import icons from '../../../constants/icons'
import stackAlignments from '../../../constants/stackAlignments'
import EmptyState from '../index'
export { default as Default } from './EmptyStateDefault.story'

export default {
  title: 'EmptyState',
  component: EmptyState,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: stackAlignments,
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
