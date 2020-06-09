import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import Button from '../index'

export default () => ({
  components: { Button },
  props: {
    text: {
      default: text('Text', 'Text'),
    },
  },
  data: () => ({
    colors: ['none', 'gold', 'error', 'info', 'subtle', 'success', 'warning'],
    variants: ['primary', 'secondary', 'text'],
  }),
  template: `
    <div class="p-6">
      <div
        v-for="color in colors"
        class="flex pb-4"
        :key="color">
        <Button
          v-for="variant in variants"
          class="mr-4"
          :color="color"
          :key="variant"
          :text="text"
          :variant="variant"
          @click.native="action"
        />
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
