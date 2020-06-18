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
    <div class="flex justify-start p-6">
      <div><Button :isLoading="isLoading" text="Text" @click.native="action" /></div>
    </div>
  `,
  methods: {
    action: action('click'),
  },
})
