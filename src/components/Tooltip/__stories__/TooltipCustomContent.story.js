import Tooltip from '../index'

export default ((args, { argTypes }) => ({
  components: { Tooltip },
  props: Object.keys(argTypes),
  template: `
    <Tooltip v-bind="$props">
      <template slot="content">
        <div>Custom</div>
        <div>Content!</div>
      </template>
      Hover Me!
    </Tooltip>
  `,
})).bind({})
