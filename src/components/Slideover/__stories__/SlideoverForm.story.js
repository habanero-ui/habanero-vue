import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import SlideoverForm from '../SlideoverForm'

export default () => ({
  components: { SlideoverForm },
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
      <SlideoverForm
        :backText="backText"
        :cancelText="cancelText"
        :saveText="saveText"
        :isOpen="true"
        @isOpenChange="isOpenChange"
        @save="save">
        Some Content for the Slideover
      </SlideoverForm
    </div>
  `,
  methods: {
    isOpenChange: action('handleIsOpenChange'),
    save: action('save'),
  },
})
