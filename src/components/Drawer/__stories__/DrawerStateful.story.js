import Button from '../../Button/index'
import Drawer from '../index'

const Template = (args, { argTypes }) => ({
  components: { Button, Drawer },
  props: Object.keys(argTypes),
  data: () => ({
    isOpenState: false,
  }),
  template: `
    <div
      class="absolute flex inset-0"
      :class="{ 'flex-row-reverse': position === 'right' }"
    >
      <Drawer v-bind="$props" :isOpen="isOpenState" :onIsOpenChange="handleIsOpenChange">
        Some Content
      </Drawer>
      <div class="flex flex-1 p-6">
        <div>
          <Button
            text="Toggle Drawer"
            @click.native="handleToggleDrawerClick"
          />
        </div>
      </div>
    </div>
  `,
  methods: {
    handleIsOpenChange(isOpen) {
      this.isOpenState = isOpen
    },

    handleToggleDrawerClick() {
      this.isOpenState = !this.isOpenState
    },
  },
})

const DrawerStateful = Template.bind({})

DrawerStateful.argTypes = {
  isOpen: { table: { disable: true } },
  onIsOpenChange: { table: { disable: true } },
}

export default DrawerStateful
