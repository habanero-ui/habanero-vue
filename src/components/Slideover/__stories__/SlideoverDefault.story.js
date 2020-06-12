import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import Slideover from '../index'

export default () => ({
  components: { Slideover },
  props: {
    backText: {
      default: text('backText', 'Back'),
    },
    cancelText: {
      default: text('cancelText', 'Cancel'),
    },
    saveText: {
      default: text('saveText', 'Save'),
    },
  },
  template: `
    <div class="absolute inset-0">
      <Slideover
        :backText="backText"
        :cancelText="cancelText"
        :saveText="saveText"
        :isOpen="true"
        @isOpenChange="isOpenChange"
        @openInNewWindow="openInNewWindow"
        @save="save">
      </Slideover>
    </div>
  `,
  methods: {
    isOpenChange: action('handleIsOpenChange'),
    openInNewWindow: action('openInNewWindow'),
    save: action('save'),
  },
})
