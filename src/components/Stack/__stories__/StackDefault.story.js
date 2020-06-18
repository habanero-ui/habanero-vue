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
        [undefined, 'center', 'end', 'start'],
        undefined,
      ),
    },
    direction: {
      default: select(
        'direction',
        ['column', 'column-reverse', 'row', 'row-reverse'],
        'column',
      ),
    },
    space: {
      default: number('space', 6),
    },
  },
  template: `
    <div>
      <Stack :align="align" class="bg-green" :direction="direction" :space="space">
        <Button text="Button 1" />
        <div class="bg-purple">Colored DIV!</div>
        <Button text="Button 2" />
        <span>Normal SPAN.</span>
        <TextInput value="TextInput" />
      </Stack>
    </div>
  `,
})
