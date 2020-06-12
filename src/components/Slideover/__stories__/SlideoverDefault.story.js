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
    openInNewWindowText: {
      default: text('openInNewWindowText', 'Open in new window'),
    },
  },
  template: `
    <div class="absolute inset-0">
      <Slideover
        :backText="backText"
        :cancelText="cancelText"
        :isOpen="true"
        :openInNewWindowText="openInNewWindowText"
        :saveText="saveText"
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
