import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import Drawer from '../index'

export default () => ({
  components: { Drawer },
  props: {
    isOpen: {
      default: boolean('isOpen', true),
    },
  },
  template: `
    <div class="absolute inset-0">
      <Drawer
        :isOpen="isOpen"
        :onIsOpenChange="onIsOpenChange">
        <div>Some Content</div>
      </Drawer>
    </div>
  `,
  methods: {
    onIsOpenChange: action('onIsOpenChange'),
  },
})
