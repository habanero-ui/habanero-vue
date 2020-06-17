import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
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
      default: text('helperText', ''),
    },
    label: {
      default: text('label', ''),
    },
    placeholder: {
      default: text('placeholder', 'Email address'),
    },
    type: {
      default: select(
        'type',
        ['email', 'number', 'password', 'search', 'text', 'tel', 'url'],
        'email',
      ),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <TextInput
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :label="label"
        :placeholder="placeholder"
        :type="type"
        @click="click"
        @input="input"
      />
    </div>
  `,
  methods: {
    click: action('click'),
    input: action('input'),
  },
})
