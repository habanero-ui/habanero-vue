import { action } from '@storybook/addon-actions'
import Button from '../index'

export default () => ({
  components: { Button },
  template: `
    <div class="flex justify-start p-6">
      <div>
        <Button
          disabled
          text="Text"
          @click.native="action"
        />
      </div>
    </div>
  `,
  methods: {
    action: action('click'),
  },
})
