import { action } from '@storybook/addon-actions'

import MultiSelect from '../index'
export { default as Default } from './MultiSelectDefault.story'
export { default as Stateful } from './MultiSelectStateful.story'

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  args: {
    disabled: false,
    error: '',
    helperText: '',
    items: [
      'Alpha',
      'Beta',
      'Charlie',
      'Delta',
      'Echo',
      'Foxtrot',
      'Golf',
      'Hotel',
      'India',
      'Juliet',
      'Kilo',
      'Lima',
    ],
    label: '',
    maxTagCount: 4,
    onSelectedIdsChange: action('onSelectedIdsChange'),
    placeholder: 'Search...',
    selectedIds: ['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo'],
  },
}
