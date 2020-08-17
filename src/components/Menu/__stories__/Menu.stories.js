import { action } from '@storybook/addon-actions'

import Menu from '../index'
export { default as Default } from './MenuDefault.story'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    items: [
      {
        onClick: action('Download CSV'),
        text: 'Download CSV',
      },
      {
        onClick: action('Download XLS'),
        text: 'Download XLS',
      },
    ],
  },
}
