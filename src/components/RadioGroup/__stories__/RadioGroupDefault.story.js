import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import RadioButton from '../../RadioButton/index'
import RadioGroup from '../index'

export default () => ({
  components: { RadioButton, RadioGroup },
  props: {
    error: {
      default: text('error', ''),
    },
    helperText: {
      default: text('helperText', ''),
    },
    label: {
      default: text('label', 'Label Text'),
    },
    value: {
      default: text('value', 'a'),
    },
  },
  template: `
    <div class="flex flex-col items-start p-6">
      <RadioGroup
        :error="error"
        :helperText="helperText"
        :label="label"
        :onValueChange="onValueChange"
        :value="value"
      >
        <RadioButton text="Alpha" value="a" />
        <RadioButton text="Bravo" value="b" />
        <RadioButton text="Charlie" value="c" />
      </RadioGroup>
    </div>
  `,
  methods: {
    onValueChange: action('onValueChange'),
  },
})
