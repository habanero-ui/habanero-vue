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
    destroyText: {
      default: text('destroyText', 'Destroy'),
    },
    isCancelVisible: {
      default: boolean('isCancelVisible', true),
    },
    isCancelDisabled: {
      default: boolean('isCancelDisabled', false),
    },
    isConfirmDisabled: {
      default: boolean('isConfirmDisabled', false),
    },
    isConfirmLoading: {
      default: boolean('isConfirmLoading', false),
    },
    isConfirmVisible: {
      default: boolean('isConfirmVisible', true),
    },
    isDestroyVisible: {
      default: boolean('isDestroyVisible', true),
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
        :isCancelDisabled="isCancelDisabled"
        :isConfirmDisabled="isConfirmDisabled"
        :isConfirmLoading="isConfirmLoading"
        :isOpen="isOpen"
        :backText="backText"
        :cancelText="cancelText"
        :confirmText="confirmText"
        :destroyText="destroyText"
        :openInNewWindowText="openInNewWindowText"
        :onCancel="isCancelVisible ? onCancel : undefined"
        :onConfirm="isConfirmVisible ? onConfirm : undefined"
        :onDestroy="isDestroyVisible ? onDestroy : undefined"
        :onIsOpenChange="onIsOpenChange"
        :onOpenInNewWindow="isOpenInNewWindowVisible ? onOpenInNewWindow : undefined">
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
    onDestroy: action('onDestroy'),
    onIsOpenChange: action('onIsOpenChange'),
    onOpenInNewWindow: action('onOpenInNewWindow'),
  },
})
