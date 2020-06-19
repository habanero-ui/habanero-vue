import { boolean, select, text } from '@storybook/addon-knobs'
import columnWidths from '../../../constants/columnWidths'
import Box from '../../Box/index'
import Column from '../../Column/index'
import Columns from '../index'

export default () => ({
  components: { Box, Column, Columns },
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
      default: text('space', ''),
    },
  },
  data: () => ({
    widths: columnWidths,
  }),
  template: `
    <Columns :alignY="alignY" :isReversed="isReversed" :space="space">
      <Column :width="firstColumnWidth">
        <Box class="bg-subtle" padding="small">
          {{ firstColumnWidth }}
        </Box>
      </Column>
      <Column width="fluid">
        <Box class="bg-subtle" padding="gutter">
          fluid
        </Box>
      </Column>
    </Columns>
  `,
})
