import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'
import TextInput from '../index'

export default () => ({
  components: { TextInput },
  props: {
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
    <div class="p-6">
      <TextInput :placeholder="placeholder" :type="type" @input="input" />
    </div>
  `,
  methods: {
    input: action('input'),
  },
})