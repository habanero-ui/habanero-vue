import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import Toggle from '../index'

export default () => ({
  components: { Toggle },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    isChecked: {
      default: boolean('isChecked', false),
    },
    size: {
      default: select('size', ['small', 'medium'], 'medium'),
    },
    text: {
      default: text('text', 'Some Text'),
    },
  },
  template: `
    <div class="flex flex-col items-start p-6">
      <Toggle
        :disabled="disabled"
        :isChecked="isChecked"
        :onIsCheckedChange="onIsCheckedChange"
        :size="size"
        :text="text"
      />
    </div>
  `,
  methods: {
    onIsCheckedChange: action('onIsCheckedChange'),
  },
})
