import { boolean, select } from '@storybook/addon-knobs'
import Toggle from '../index'

export default () => ({
  components: { Toggle },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    size: {
      default: select('size', ['small', 'large'], 'large'),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <Toggle :disabled="disabled" :size="size" />
    </div>
  `,
})
