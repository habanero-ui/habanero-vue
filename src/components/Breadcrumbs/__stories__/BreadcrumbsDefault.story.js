import { action } from '@storybook/addon-actions'

import Button from '../../Button/index'
import Breadcrumbs from '../index'

export default () => ({
  components: { Breadcrumbs, Button },
  data: () => ({
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
  }),
  template: `
    <div class="flex flex-start p-6"> 
      <Breadcrumbs
        :items="items"
        :onItemSelect="onItemSelect"
      />
    </div>
  `,
  methods: {
    onItemSelect: action('onItemSelect'),
  },
})
