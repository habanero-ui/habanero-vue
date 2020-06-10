import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import Slideover from '../index'

export default () => ({
  components: { Slideover },
  props: {
    // This wasn't working for some reason...
    isOpen: boolean('isOpen', true),
  },
  template: `
    <div class="absolute inset-0">
      <Slideover
        :isOpen="true"
        @isOpenChange="isOpenChange"
        @openInNewWindow="openInNewWindow">
        Some Content for the Slideover
      </Slideover>
    </div>
  `,
  methods: {
    isOpenChange: action('handleIsOpenChange'),
    openInNewWindow: action('openInNewWindow'),
  },
})
