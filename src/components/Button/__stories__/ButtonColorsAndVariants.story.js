import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import colors from '../../../constants/colors'
import Button from '../index'

export default () => ({
  components: { Button },
  props: {
    text: {
      default: text('Text', 'Text'),
    },
  },
  data: () => ({
    variants: ['primary', 'secondary', 'text'],
    colors,
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
    action: action('click'),
  },
})
