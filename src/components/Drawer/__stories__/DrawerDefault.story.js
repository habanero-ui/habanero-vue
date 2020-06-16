import { action } from '@storybook/addon-actions'
import Drawer from '../index'

export default () => ({
  components: { Drawer },
  template: `
    <div class="absolute inset-0">
      <Drawer
        :isOpen="true"
        :onIsOpenChange="onIsOpenChange">
      </Drawer>
    </div>
  `,
  methods: {
    onIsOpenChange: action('onIsOpenChange'),
  },
})
