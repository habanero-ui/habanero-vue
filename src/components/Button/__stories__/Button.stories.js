import { select, text } from '@storybook/addon-knobs'
import Button from '../index'

export default {
  title: 'Button',
  component: Button,
}

export const Default = () => ({
  components: { Button },
  template: `
    <Button
      @click.native="action"
      :class="select">
      {{ text }}
    </Button>
  `,
  props: {
    text: {
      default: text('Text', 'Button Text'),
    },
    select: {
      default: select(
        'Type',
        {
          Primary: 'primary',
          Secondary: 'secondary',
          Danger: 'danger',
        },
        'primary',
      ),
    },
  },
  methods: { action: () => console.log('Clicked!') },
})

export const Icon = () => ({
  components: { Button },
  template: `
    <Button
      @click.native="action">
      +
    </Button>
  `,
  methods: { action: () => console.log('Test!') },
})
