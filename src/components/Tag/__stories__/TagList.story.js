import { action } from '@storybook/addon-actions'
import Inline from '../../Inline/index'
import Tag from '../index'

export default () => ({
  components: { Inline, Tag },
  data: () => ({
    tags: [
      { text: 'Alpha', value: 'a' },
      { text: 'Bravo', value: 'b' },
      { text: 'Charlie', value: 'c' },
      { text: 'Delta', value: 'd' },
      { text: 'Echo', value: 'e' },
      { text: 'Foxtrot', value: 'f' },
      { text: 'Golf', value: 'g' },
    ],
  }),
  template: `
    <div class="p-6 max-w-md">
      <Inline space="small">
        <Tag
          v-for="tag in tags"
          :onDelete="onDelete"
          :text="tag.text"
          :value="tag.value"
        />
      </Inline>
    </div>
  `,
  methods: {
    onDelete: action('onDelete'),
  },
})
