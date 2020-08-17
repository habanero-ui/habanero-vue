import Box from '../../Box/index'
import Column from '../../Column/index'
import Columns from '../index'

export default ((args, { argTypes }) => ({
  components: { Box, Column, Columns },
  props: Object.keys(argTypes),
  template: `
    <Columns v-bind="$props">
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
})).bind({})
