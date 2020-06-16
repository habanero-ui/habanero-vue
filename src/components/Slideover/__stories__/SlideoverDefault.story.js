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
    confirmText: {
      default: text('confirmText', 'Confirm'),
    },
    isCancelVisible: {
      default: boolean('isCancelVisible', true),
    },
    isConfirmVisible: {
      default: boolean('isConfirmVisible', true),
    },
    isOpen: {
      default: boolean('isOpen', true),
    },
    isOpenInNewWindowVisible: {
      default: boolean('isOpenInNewWindowVisible', true),
    },
    openInNewWindowText: {
      default: text('openInNewWindowText', 'Open in new window'),
    },
  },
  template: `
    <div class="absolute inset-0">
      <Slideover
        :isOpen="isOpen"
        :backText="backText"
        :cancelText="cancelText"
        :confirmText="confirmText"
        :openInNewWindowText="openInNewWindowText"
        :onCancel="isCancelVisible && onCancel"
        :onConfirm="isConfirmVisible && onConfirm"
        :onIsOpenChange="onIsOpenChange"
        :onOpenInNewWindow="isOpenInNewWindowVisible && onOpenInNewWindow">
        <div class="flex-1 overflow-y-auto">
          <div style="background: linear-gradient(to bottom right, #36d, #fff); height: 4000px;">
            Some Scrolling Content
          </div>
        </div>
      </Slideover>
    </div>
  `,
  methods: {
    onCancel: action('onCancel'),
    onConfirm: action('onConfirm'),
    onIsOpenChange: action('onIsOpenChange'),
    onOpenInNewWindow: action('onOpenInNewWindow'),
  },
})
