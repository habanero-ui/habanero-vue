import { action } from '@storybook/addon-actions'
import { boolean, select, text } from '@storybook/addon-knobs'
import colors from '../../../constants/colors'
import icons from '../../../constants/icons'
import variants from '../../../constants/buttonVariants'
import Button from '../index'

export default () => ({
  components: { Button },
  props: {
    color: {
      default: select('color', colors, 'black'),
    },
    disabled: {
      default: boolean('disabled', false),
    },
    iconName: {
      default: select('iconName', [undefined, ...icons]),
    },
    iconSide: {
      default: select('iconSide', ['left', 'right'], 'right'),
    },
    iconSize: {
      default: select(
        'iconSize',
        {
          small: 'small',
          medium: 'medium',
          large: 'large',
        },
        'medium',
      ),
    },
    isLoading: {
      default: boolean('isLoading', false),
    },
    size: {
      default: select('size', ['small', 'medium'], 'medium'),
    },
    text: {
      default: text('text', 'Text'),
    },
    variant: {
      default: select('variant', variants, 'primary'),
    },
  },
  template: `
    <div class="flex justify-start p-6">
      <div>
        <Button
          :color="color"
          :disabled="disabled"
          :iconName="iconName"
          :iconSide="iconSide"
          :iconSize="iconSize"
          :isLoading="isLoading"
          :size="size"
          :text="text"
          :variant="variant"
          @click.native="action"
        />
      </div>
    </div>
  `,
  methods: {
    action: action('click'),
  },
})
