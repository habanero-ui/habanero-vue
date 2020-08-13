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
  template: `<RadioButton v-bind="$props" :onIsCheckedChange="onIsCheckedChange" />`,
  methods: {
    onIsCheckedChange: action('onIsCheckedChange'),
  },
})
