import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import toastStackDirections from '../../../constants/toastStackDirections'
import Toast from '../../Toast/index'
import ToastStack from '../index'

export default () => ({
  components: { Toast, ToastStack },
  props: {
    direction: {
      default: select('direction', toastStackDirections, 'down'),
    },
  },
  data: () => ({
    toasts: [
      { id: 1, label: 'First Toast', message: 'Message for the first toast' },
      {
        id: 2,
        label: 'Second Toast',
        message: 'Message for the second toast',
      },
      { id: 3, label: 'Third Toast', message: 'Message for the third toast' },
    ],
  }),
  template: `
    <div class="p-6">
      <ToastStack
        :direction="direction"
        :onToastRemove="onToastRemove"
        :onToastsChange="onToastsChange"
        :toasts="toasts"
      />
    </div>
  `,
  methods: {
    onToastRemove: action('onToastRemove'),
    onToastsChange: action('onToastsChange'),
  },
})
