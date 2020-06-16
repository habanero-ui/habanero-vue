import { action } from '@storybook/addon-actions'
import Drawer from '../index'

export default () => ({
  components: { Drawer },
  template: `
    <div class="absolute inset-0">
      <Drawer
        :isOpen="true"
        @isOpenChange="isOpenChange">
      </Drawer>
    </div>
  `,
  methods: {
    isOpenChange: action('handleIsOpenChange'),
  },
})
