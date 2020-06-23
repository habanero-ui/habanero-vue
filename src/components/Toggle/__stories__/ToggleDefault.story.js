import { select } from '@storybook/addon-knobs'
import Toggle from '../index'

export default () => ({
  components: { Toggle },
  props: {
    size: {
      default: select('size', ['small', 'large'], 'large'),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <Toggle :size="size" />
    </div>
  `,
})
