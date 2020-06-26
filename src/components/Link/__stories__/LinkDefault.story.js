import { text } from '@storybook/addon-knobs'
import Link from '../index'

export default () => ({
  components: { Link },
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
      <Link :href="href" target="_blank">{{ text }}</Link>
    </div>
  `,
})
