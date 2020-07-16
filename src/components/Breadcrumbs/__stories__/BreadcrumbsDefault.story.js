import { action } from '@storybook/addon-actions'

import Button from '../../Button/index'
import Breadcrumbs from '../index'

export default () => ({
  components: { Breadcrumbs, Button },
  data: () => ({
    items: [
      { text: 'Alpha' },
      { text: 'Bravo' },
      { text: 'Charlie' },
      { text: 'Delta' },
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
