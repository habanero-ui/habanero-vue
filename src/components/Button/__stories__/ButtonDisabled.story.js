import { action } from '@storybook/addon-actions'
import Button from '../index'

export default () => ({
  components: { Button },
  template: `
    <div class="p-6">
      <Button
        class="mr-6"
        disabled
        text="Text"
        @click.native="action"
      />
    </div>
  `,
  methods: {
    action: action('click'),
  },
})
