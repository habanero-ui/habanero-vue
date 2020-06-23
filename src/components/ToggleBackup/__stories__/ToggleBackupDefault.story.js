import { boolean, select } from '@storybook/addon-knobs'
import ToggleBackup from '../index'

export default () => ({
  components: { ToggleBackup },
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
      <ToggleBackup :disabled="disabled" :size="size" />
    </div>
  `,
})
