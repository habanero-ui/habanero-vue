import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'
import statuses from '../../../constants/statuses'
import Toast from '../index'

export default () => ({
  components: { Toast },
  props: {
    label: {
      default: text('label', 'Toast Label'),
    },
    message: {
      default: text('message', 'Message text goes here'),
    },
    status: {
      default: select('status', statuses, 'info'),
    },
  },
  template: `
    <div class="flex justify-start p-6">
      <Toast
        :label="label"
        :message="message"
        :onClose="onClose"
        :status="status"
      />
    </div>
  `,
  methods: {
    onClose: action('onClose'),
  },
})
