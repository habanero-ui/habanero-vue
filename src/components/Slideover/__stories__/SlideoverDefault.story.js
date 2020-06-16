import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

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
    isCancelVisible: {
      default: boolean('isCancelVisible', true),
    },
    isOpenInNewWindowVisible: {
      default: boolean('isOpenInNewWindowVisible', true),
    },
    isSaveVisible: {
      default: boolean('isSaveVisible', true),
    },
    saveText: {
      default: text('saveText', 'Save'),
    },
    openInNewWindowText: {
      default: text('openInNewWindowText', 'Open in new window'),
    },
  },
  computed: {
    listeners() {
      return {
        ...(this.isCancelVisible ? { cancel: this.cancel } : {}),
        ...(this.isOpenInNewWindowVisible
          ? { openInNewWindow: this.openInNewWindow }
          : {}),
        ...(this.isSaveVisible ? { save: this.save } : {}),
      }
    },
  },
  template: `
    <div class="absolute inset-0">
      <Slideover
        v-on="listeners"
        :isOpen="true"
        :backText="backText"
        :cancelText="cancelText"
        :openInNewWindowText="openInNewWindowText"
        :saveText="saveText"
        @isOpenChange="isOpenChange">
      </Slideover>
    </div>
  `,
  methods: {
    cancel: action('cancel'),
    isOpenChange: action('handleIsOpenChange'),
    openInNewWindow: action('openInNewWindow'),
    save: action('save'),
  },
})
