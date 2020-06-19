import { number, select } from '@storybook/addon-knobs'
import Button from '../../Button/index'
import TextInput from '../../TextInput/index'
import Stack from '../index'

export default () => ({
  components: { Button, Stack, TextInput },
  props: {
    align: {
      default: select(
        'align',
        ['center', 'left', 'right', 'stretch'],
        'stretch',
      ),
    },
    space: {
      default: number('space', 0),
    },
  },
  template: `
    <div>
      <Stack :align="align" class="bg-green" :space="space">
        <Button text="Button 1" />
        <div class="bg-purple">Colored DIV!</div>
        <Button text="Button 2" />
        <span>Normal SPAN.</span>
        <TextInput value="TextInput" />
      </Stack>
    </div>
  `,
})
