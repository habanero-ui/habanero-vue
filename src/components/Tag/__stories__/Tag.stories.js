import { action } from '@storybook/addon-actions'

import Tag from '../index'
export { default as Default } from './TagDefault.story'
export { default as List } from './TagList.story'

export default {
  title: 'Tag',
  component: Tag,
  args: {
    isDeleteVisible: true,
    maxChars: 9,
    onDelete: action('onDelete'),
    text: 'Some Text',
    value: 'a',
  },
}
