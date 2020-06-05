import { action } from '@storybook/addon-actions'
import Icon from '../../Icon'
import Button from '../index'

export default () => ({
  components: { Button, Icon },
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
          size="small"
          @click.native="action">
          <Icon :color="color" :colorIsBackground="appearance === 'primary'" name="bell" />
        </Button>
      </div>
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
