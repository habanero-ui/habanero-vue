import Drawer from '../index'

export default ((args, { argTypes }) => ({
  components: { Drawer },
  props: Object.keys(argTypes),
  template: `
    <div class="absolute inset-0">
      <Drawer v-bind="$props">
        Some Content
      </Drawer>
    </div>
  `,
})).bind({})
