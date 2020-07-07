import { select, text } from '@storybook/addon-knobs'
import variants from '../../../constants/statusVariants'
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
    variant: {
      default: select('variant', variants, 'info'),
    },
  },
  template: `
    <div class="flex justify-start p-6">
      <Toast :label="label" :message="message" :variant="variant" />
    </div>
  `,
})
