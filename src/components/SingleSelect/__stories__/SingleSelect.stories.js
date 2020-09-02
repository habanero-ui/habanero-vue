import { action } from '@storybook/addon-actions'

import SingleSelect from '../index'
export { default as Default } from './SingleSelectDefault.story'
export { default as Stateful } from './SingleSelectStateful.story'

export default {
  title: 'Components/SingleSelect',
  component: SingleSelect,
  argTypes: {
    selectedId: {
      control: {
        options: [
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
        type: 'select',
      },
    },
  },
  args: {
    disabled: false,
    error: '',
    getSecondaryText: () => 'Secondary Text',
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
    onSelectedIdChange: action('onSelectedIdChange'),
    placeholder: 'Search...',
    selectedId: 'Beta',
  },
}
