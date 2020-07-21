import { boolean, select, text } from '@storybook/addon-knobs'

import columnWidths from '../../../constants/columnWidths'
import verticalAlignments from '../../../constants/verticalAlignments'
import Box from '../../Box/index'
import Column from '../../Column/index'
import Columns from '../index'

export default () => ({
  components: { Box, Column, Columns },
  props: {
    alignY: {
      default: select('alignY', verticalAlignments, 'top'),
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
        <Box backgroundColor="subtle" class="flex-grow" padding="small">
          {{ firstColumnWidth }}
        </Box>
      </Column>
      <Column width="fluid">
        <Box backgroundColor="subtle" class="flex-grow" padding="gutter">
          fluid
        </Box>
      </Column>
    </Columns>
  `,
})
