import { number, select } from '@storybook/addon-knobs'
import Button from '../../Button/index'
import Stack from '../index'

export default () => ({
  components: { Button, Stack },
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
        <Button text="Button 3" />
      </Stack>
    </div>
  `,
})
