import { action } from '@storybook/addon-actions'

import Breadcrumbs from '../index'
export { default as Default } from './BreadcrumbsDefault.story'

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    items: [
      { href: 'https://google.com', text: 'Alpha' },
      { href: '#', text: 'Bravo' },
      { text: 'Charlie' },
      {
        text: 'Delta',
        metadata: {
          propertyA: 'Some Metadata Value',
        },
      },
    ],
    onItemSelect: action('onItemSelect'),
  },
}
