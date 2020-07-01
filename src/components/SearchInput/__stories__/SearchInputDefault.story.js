import { action } from '@storybook/addon-actions'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import icons from '../../../constants/icons'
import SearchInput from '../index'

export default () => ({
  components: { SearchInput },
  props: {
    delay: {
      default: number('delay', 500),
    },
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
    label: {
      default: text('label', 'Legal Name'),
    },
    placeholder: {
      default: text('placeholder', 'John Michael Doe'),
    },
    type: {
      default: select(
        'type',
        ['email', 'number', 'password', 'search', 'text', 'tel', 'url'],
        'email',
      ),
    },
    value: {
      default: text('value', 'Query Value'),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <SearchInput
        :delay="delay"
        :disabled="disabled"
        :error="error"
        :helperText="helperText"
        :iconName="iconName"
        :label="label"
        :onValueChange="onValueChange"
        :onSearch="onSearch"
        :placeholder="placeholder"
        :type="type"
        :value="value"
      />
    </div>
  `,
  methods: {
    onSearch: action('onSearch'),
    onValueChange: action('onValueChange'),
  },
})
