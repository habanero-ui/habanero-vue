import Drawer from '../index'

export default ((args, { argTypes }) => ({
  components: { Drawer },
  props: Object.keys(argTypes),
  template: `
    <div class="absolute flex inset-0">
      <div v-if="position === 'right'" class="flex-1">
        Content Before
      </div>
      <Drawer v-bind="$props">
        Some Content
      </Drawer>
      <div v-if="position === 'left'" class="flex-1">
        Content After
      </div>
    </div>
  `,
})).bind({})
