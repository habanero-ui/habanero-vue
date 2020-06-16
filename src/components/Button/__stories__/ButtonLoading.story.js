import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import Button from '../index'

export default () => ({
  components: { Button },
  props: {
    isLoading: {
      default: boolean('isLoading', true),
    },
  },
  template: `
    <div class="p-6">
      <Button :isLoading="isLoading" text="Text" @click.native="action" />
    </div>
  `,
  methods: {
    action: action('click'),
  },
})
