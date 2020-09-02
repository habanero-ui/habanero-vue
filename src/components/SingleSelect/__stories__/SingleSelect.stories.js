import { action } from '@storybook/addon-actions'

import people from '../../../../.storybook/dummyData/people'
import SingleSelect from '../index'
export { default as Default } from './SingleSelectDefault.story'
export { default as Stateful } from './SingleSelectStateful.story'

export default {
  title: 'Components/SingleSelect',
  component: SingleSelect,
  argTypes: {
    selectedId: {
      control: 'number',
    },
    isAvatarFirstNameEnabled: {
      control: 'boolean',
    },
    isAvatarImageEnabled: {
      control: 'boolean',
    },
    isAvatarLastNameEnabled: {
      control: 'boolean',
    },
    isIconEnabled: {
      control: 'boolean',
    },
    isPrimaryStatusTextEnabled: {
      control: 'boolean',
    },
    isSecondaryTextEnabled: {
      control: 'boolean',
    },
    isTertiaryTextEnabled: {
      control: 'boolean',
    },
  },
  args: {
    disabled: false,
    error: '',
    getAvatarFirstName: (item) => item.first_name,
    getAvatarImage: (item) => item.photo,
    getAvatarLastName: (item) => item.last_name,
    getIconName: () => 'bell',
    getId: (item) => item.id,
    getPrimaryStatusText: () => 'Primary status text',
    getPrimaryText: (item) => `${item.first_name} ${item.last_name}`,
    getSecondaryText: (item) => item.job,
    getTertiaryText: (item) => item.city,
    helperText: '',
    isAvatarFirstNameEnabled: false,
    isAvatarImageEnabled: false,
    isAvatarLastNameEnabled: false,
    isIconEnabled: false,
    isPrimaryStatusTextEnabled: false,
    isSecondaryTextEnabled: true,
    isTertiaryTextEnabled: true,
    items: people.slice(0, 50),
    label: '',
    onSelectedIdChange: action('onSelectedIdChange'),
    placeholder: 'Search people...',
    selectedId: 4,
  },
}
