import colors from '../../../constants/colors'
import icons from '../../../constants/icons'
import ListItem from '../index'
export { default as Default } from './ListItemDefault.story'

export default {
  title: 'Components/ListItem',
  component: ListItem,
  argTypes: {
    iconColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: icons,
      },
    },
    primaryTextColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    primaryStatusTextColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    secondaryTextColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    tertiaryTextColor: {
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
    iconColor: 'black',
    iconName: '',
    isActionable: true,
    isNavigation: false,
    isSelected: false,
    primaryStatusText: 'Primary Status Text',
    primaryStatusTextColor: 'subtle',
    primaryText: 'Primary Text',
    primaryTextColor: 'black',
    secondaryText: 'Secondary Text',
    secondaryTextColor: 'black',
    tertiaryText: 'Tertiary Text',
    tertiaryTextColor: 'subtle',
  },
}
