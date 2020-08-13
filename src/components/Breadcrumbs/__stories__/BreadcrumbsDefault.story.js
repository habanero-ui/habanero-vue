import { action } from '@storybook/addon-actions'

import Button from '../../Button/index'
import Breadcrumbs from '../index'

const Template = ((args, { argTypes }) => ({
  components: { Breadcrumbs, Button },
  props: Object.keys(argTypes),
  template: `
    <div class="flex flex-col flex-start"> 
      <Breadcrumbs v-bind="$props" />
    </div>
  `,
})).bind({})

const BreadcrumbsDefault = Template.bind({})

BreadcrumbsDefault.args = {
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
}

export default BreadcrumbsDefault
