import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import Button from '../index'

export default () => ({
  components: { Button },
  props: {
    isLoading: {
      default: boolean('Loading', true),
    },
  },
  template: `
    <div class="p-6">
      <Button
        :isLoading="isLoading"
        class="mr-6"
        text="Text"
        @click.native="action"
      />
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
