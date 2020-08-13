import { action } from '@storybook/addon-actions'
import { boolean, number, text } from '@storybook/addon-knobs'

import Tag from '../index'

export default () => ({
  components: { Tag },
  props: {
    isDeleteVisible: {
      default: boolean('isDeleteVisible', true),
    },
    maxChars: {
      default: number('maxChars', 9),
    },
    text: {
      default: text('text', 'Some Long Text'),
    },
    value: {
      default: text('value', 'a'),
    },
  },
  template: `
    <Tag
      :maxChars="maxChars"
      :onDelete="isDeleteVisible ? onDelete : undefined"
      :text="text"
      :value="value"
    />
  `,
  methods: {
    onDelete: action('onDelete'),
  },
})
