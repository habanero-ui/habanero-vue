import { text } from '@storybook/addon-knobs'

import Icon from '../../Icon/index'
import TextLink from '../index'

export default () => ({
  components: { Icon, TextLink },
  props: {
    href: {
      default: text('href', 'https://www.google.com'),
    },
    text: {
      default: text('text', 'Link Text'),
    },
  },
  template: `
    <div class="flex flex-start p-6"> 
      <TextLink :href="href" target="_blank">
        <Icon name="bell" />
      </TextLink>
    </div>
  `,
})
