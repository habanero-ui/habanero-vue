import { boolean, text, select } from '@storybook/addon-knobs'
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
    showDividers: {
      default: boolean('showDividers', false),
    },
    space: {
      default: text('space', 'gutter'),
    },
  },
  template: `
    <div>
      <Stack :align="align" :showDividers="showDividers" :space="space">
        <Button text="Button 1" />
        <div class="bg-purple">Colored DIV!</div>
        <Button text="Button 2" />
        <span>Normal SPAN.</span>
        <TextInput value="TextInput" />
      </Stack>
    </div>
  `,
})
