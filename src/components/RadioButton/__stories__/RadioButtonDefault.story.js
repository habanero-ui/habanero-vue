import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import RadioButton from '../index'

export default () => ({
  components: { RadioButton },
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
    value: {
      default: text('value', 'a'),
    },
  },
  template: `
    <div class="flex flex-col items-start p-6">
      <RadioButton
        :disabled="disabled"
        :isChecked="isChecked"
        :onIsCheckedChange="onIsCheckedChange"
        :text="text"
        :value="value"
      />
    </div>
  `,
  methods: {
    onIsCheckedChange: action('onIsCheckedChange'),
  },
})
