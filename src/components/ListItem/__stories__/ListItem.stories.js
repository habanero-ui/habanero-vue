import colors from '../../../constants/colors'
import icons from '../../../constants/icons'
import ListItem from '../index'
export { default as Default } from './ListItemDefault.story'

export default {
  title: 'Components/ListItem',
  component: ListItem,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: icons,
      },
    },
    primaryStatusTextColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
  },
  args: {
    avatarFirstName: '',
    avatarImage: '',
    avatarLastName: '',
    iconName: '',
    isActionable: true,
    isNavigation: false,
    primaryStatusText: 'Primary Status Text',
    primaryStatusTextColor: 'subtle',
    primaryText: 'Primary Text',
    secondaryText: 'Secondary Text',
    tertiaryText: 'Tertiary Text',
  },
}
