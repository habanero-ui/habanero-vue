import WithScreenSize from '../../../mixins/WithScreenSize'
import Inline from '../index'

const Template = (args, { argTypes }) => ({
  components: { Inline },
  mixins: [WithScreenSize],
  props: Object.keys(argTypes),
  mounted() {
    this.ScreenSize.startWatching()
  },
  beforeDestroy() {
    this.ScreenSize.stopWatching()
  },
  template: `
    <Inline v-bind="$props" :space="['xsmall', 'gutter', 'xlarge']">
      <div class="border border-border">Item 1 ({{ ScreenSize.type }})</div>
      <div class="border border-border">Item 2 ({{ ScreenSize.type }})</div>
      <div class="border border-border">Item 3 ({{ ScreenSize.type }})</div>
    </Inline>
  `,
})

const InlineResponsive = Template.bind({})

InlineResponsive.argTypes = {
  space: { table: { disable: true } },
}

export default InlineResponsive
