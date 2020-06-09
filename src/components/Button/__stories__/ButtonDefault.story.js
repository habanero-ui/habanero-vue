import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import iconList from '../../Icon/__stories__/iconList'
import Button from '../index'

export default () => ({
  components: { Button },
  props: {
    color: {
      default: select(
        'color',
        [
          'none',
          'error',
          'info',
          'subtle',
          'success',
          'warning',
          'gold',
          'blue',
          'green',
          'orange',
          'pink',
          'purple',
        ],
        'none',
      ),
    },
    disabled: {
      default: boolean('disabled', false),
    },
    iconName: {
      default: select('iconName', [undefined, ...iconList]),
    },
    iconSide: {
      default: select('iconSide', ['left', 'right'], 'right'),
    },
    iconSize: {
      default: select(
        'iconSize',
        {
          undefined: undefined,
          small: 'small',
          medium: 'medium',
          large: 'large',
        },
        '',
      ),
    },
    size: {
      default: select('size', ['small', 'medium'], 'medium'),
    },
    text: {
      default: text('text', 'Text'),
    },
    variant: {
      default: select('variant', ['primary', 'secondary', 'text'], 'primary'),
    },
  },
  template: `
    <div class="p-6">
      <Button
        class="mr-6"
        :color="color"
        :disabled="disabled"
        :iconName="iconName"
        :iconSide="iconSide"
        :iconSize="iconSize"
        :size="size"
        :text="text"
        :variant="variant"
        @click.native="action"
      />
    </div>
  `,
  methods: {
    action: action('Click'),
  },
})
