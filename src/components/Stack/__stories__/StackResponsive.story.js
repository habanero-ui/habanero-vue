import WithScreenSize from '../../../mixins/WithScreenSize'
import Stack from '../index'

const Template = (args, { argTypes }) => ({
  components: { Stack },
  mixins: [WithScreenSize],
  props: Object.keys(argTypes),
  mounted() {
    this.ScreenSize.startWatching()
  },
  beforeDestroy() {
    this.ScreenSize.stopWatching()
  },
  template: `
    <Stack v-bind="$props" :space="['xsmall', 'gutter', 'xlarge']">
      <div>Item 1 ({{ ScreenSize.type }})</div>
      <div>Item 2 ({{ ScreenSize.type }})</div>
      <div>Item 3 ({{ ScreenSize.type }})</div>
    </Stack>
  `,
})

const StackResponsive = Template.bind({})

StackResponsive.argTypes = {
  space: { table: { disable: true } },
}

export default StackResponsive
