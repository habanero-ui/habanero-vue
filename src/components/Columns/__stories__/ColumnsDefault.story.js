import { boolean, number, select } from '@storybook/addon-knobs'
import columnWidths from '../../../constants/columnWidths'
import Column from '../../Column/index'
import Stack from '../../Stack/index'
import Columns from '../index'

export default () => ({
  components: { Column, Columns, Stack },
  props: {
    alignY: {
      default: select('alignY', ['bottom', 'center', 'top'], 'top'),
    },
    firstColumnWidth: {
      default: select('firstColumnWidth', columnWidths, 'content'),
    },
    isReversed: {
      default: boolean('isReversed', false),
    },
    space: {
      default: number('space', 6),
    },
  },
  data: () => ({
    widths: columnWidths,
  }),
  template: `
    <Columns :alignY="alignY" :isReversed="isReversed" :space="space">
      <Column :width="firstColumnWidth"><div class="bg-subtle p-2">{{ firstColumnWidth }}</div></Column>
      <Column width="fluid"><div class="bg-subtle p-4">fluid</div></Column>
    </Columns>
  `,
})
