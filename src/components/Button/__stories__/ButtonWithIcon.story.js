import { action } from '@storybook/addon-actions'
import Icon from '../../Icon'
import Button from '../index'

export default () => ({
  components: { Button, Icon },
  data: () => ({
    colors: ['none', 'error', 'info', 'subtle', 'success', 'warning'],
    variants: ['primary', 'secondary', 'text'],
  }),
  template: `
    <div class="p-6">
      <div
        v-for="color in colors"
        class="flex pb-6"
        :key="color">
        <Button
          v-for="variant in variants"
          class="mr-6"
          :color="color"
          iconName="bell"
          :key="variant"
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
