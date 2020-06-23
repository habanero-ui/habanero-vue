import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import colors from '../../../constants/colors'
import Column from '../../Column/index'
import Columns from '../../Columns/index'
import Stack from '../../Stack/index'
import Button from '../index'

export default () => ({
  components: { Button, Column, Columns, Stack },
  props: {
    text: {
      default: text('Text', 'Text'),
    },
  },
  data: () => ({
    variants: ['primary', 'secondary', 'text'],
    colors,
  }),
  template: `
    <Stack class="p-6" space="4">
      <Columns v-for="color in colors" :key="color" space="4">
        <Column v-for="variant in variants" :key="variant" width="content">
          <Button
            :color="color"
            :text="text"
            :variant="variant"
            @click.native="action"
          />
        </Column>
      </Columns>
    </Stack>
  `,
  methods: {
    action: action('click'),
  },
})
