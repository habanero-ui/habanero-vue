import Drawer from '../index'

export default ((args, { argTypes }) => ({
  components: { Drawer },
  props: Object.keys(argTypes),
  template: `
    <div
      class="absolute flex inset-0"
      :class="{ 'flex-row-reverse': position === 'right' }"
    >
      <Drawer v-bind="$props">
        Some Content
      </Drawer>
      <div class="flex-1">
        Outside Content
      </div>
    </div>
  `,
})).bind({})
