import { action } from '@storybook/addon-actions'

import SearchInput from '../index'
export { default as Default } from './SearchInputDefault.story'
export { default as UncontrolledSearch } from './SearchInputUncontrolledSearch.story'

export default {
  title: 'SearchInput',
  component: SearchInput,
  args: {
    delay: 500,
    disabled: false,
    error: '',
    helperText: 'Enter your name as it appears on your birth certificate',
    label: 'Legal Name',
    onSearch: action('onSearch'),
    onValueChange: action('onValueChange'),
    placeholder: 'John Michael Doe',
    value: 'Query Value',
  },
}
