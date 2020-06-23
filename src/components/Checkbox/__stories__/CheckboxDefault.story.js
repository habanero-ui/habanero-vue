import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import Checkbox from '../index'

export default () => ({
  components: { Checkbox },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    isChecked: {
      default: boolean('isChecked', false),
    },
    text: {
      default: text('text', 'Some Text'),
    },
  },
  template: `
    <div class="flex flex-col items-start p-6">
      <Checkbox
        :disabled="disabled"
        :isChecked="isChecked"
        :onIsCheckedChange="onIsCheckedChange"
        :text="text"
      />
    </div>
  `,
  methods: {
    onIsCheckedChange: action('onIsCheckedChange'),
  },
})
