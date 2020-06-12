import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import SlideoverDetail from '../SlideoverDetail'

export default () => ({
  components: { SlideoverDetail },
  props: {
    backText: {
      default: text('backText', 'Back'),
    },
    openInNewWindowText: {
      default: text('openInNewWindowText', 'Open in new window'),
    },
  },
  template: `
    <div class="absolute inset-0">
      <SlideoverDetail
        :backText="backText"
        :openInNewWindowText="openInNewWindowText"
        :isOpen="true"
        @isOpenChange="isOpenChange">
        Some Content for the Slideover
      </SlideoverDetail>
    </div>
  `,
  methods: {
    isOpenChange: action('handleIsOpenChange'),
  },
})
