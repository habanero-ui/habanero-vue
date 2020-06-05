import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import Button from '../index'

export default () => ({
  components: { Button },
  props: {
    text: {
      default: text('Text', 'Button Text'),
    },
  },
  data: () => ({
    appearances: ['primary', 'secondary', 'text'],
    colors: ['none', 'error', 'info', 'subtle', 'success', 'warning'],
  }),
  template: `
    <div class="p-6">
      <div
        v-for="color in colors"
        class="flex pb-6"
        :key="color">
        <Button
          v-for="appearance in appearances"
          :appearance="appearance"
          class="mr-6"
          :color="color"
          :key="appearance"
          :text="text"
          @click.native="action"
        />
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
