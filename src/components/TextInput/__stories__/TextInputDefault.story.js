import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'

import icons from '../../../constants/icons'
import iconSides from '../../../constants/iconSides'
import textInputTypes from '../../../constants/textInputTypes'
import TextInput from '../index'

export default () => ({
  components: { TextInput },
  props: {
    disabled: {
      default: boolean('disabled', false),
    },
    error: {
      default: text('error', ''),
    },
    helperText: {
      default: text(
        'helperText',
        'Enter your name as it appears on your birth certificate',
      ),
    },
    iconName: {
      default: select('iconName', [undefined, ...icons]),
    },
    iconSide: {
      default: select('iconSide', iconSides, 'left'),
    },
    label: {
      default: text('label', 'Legal Name'),
    },
    placeholder: {
      default: text('placeholder', 'John Michael Doe'),
    },
    type: {
      default: select('type', textInputTypes, 'email'),
    },
    value: {
      default: text('value', ''),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <TextInput
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :iconName="iconName"
        :iconSide="iconSide"
        :label="label"
        :onValueChange="onValueChange"
        :placeholder="placeholder"
        :type="type"
        :value="value"
      />
    </div>
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
