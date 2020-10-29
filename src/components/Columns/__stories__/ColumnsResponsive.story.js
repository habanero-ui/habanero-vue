import WithScreenSize from '../../../mixins/WithScreenSize'
import Box from '../../Box/index'
import Column from '../../Column/index'
import Columns from '../index'

const Template = (args, { argTypes }) => ({
  components: { Box, Column, Columns },
  mixins: [WithScreenSize],
  props: Object.keys(argTypes),
  mounted() {
    this.ScreenSize.startWatching()
  },
  beforeDestroy() {
    this.ScreenSize.stopWatching()
  },
  template: `
    <Columns v-bind="$props" :isReversed="[true, false, true]" :space="['xsmall', 'gutter', 'xlarge']">
      <Column :width="firstColumnWidth">
        <Box backgroundColor="subtle" class="flex-grow" padding="small">
          {{ firstColumnWidth }} {{ ScreenSize.type }}
        </Box>
      </Column>
      <Column width="fluid">
        <Box backgroundColor="subtle" class="flex-grow" padding="gutter">
          fluid {{ ScreenSize.type }}
        </Box>
      </Column>
    </Columns>
  `,
})

const ColumnsResponsive = Template.bind({})

ColumnsResponsive.argTypes = {
  space: { table: { disable: true } },
}

export default ColumnsResponsive
