import Button from '../../Button/index'
import Drawer from '../index'

const Template = (args, { argTypes }) => ({
  components: { Button, Drawer },
  props: Object.keys(argTypes),
  data: () => ({
    isOpenState: false,
  }),
  template: `
    <div class="absolute flex flex-col items-start inset-0">
      <div>
        <Button
          text="Open Drawer"
          @click.native="handleOpenDrawerClick"
        />
      </div>
      <Drawer v-bind="$props" :isOpen="isOpenState" :onIsOpenChange="handleIsOpenChange">
        Some Content
      </Drawer>
    </div>
  `,
  methods: {
    handleIsOpenChange(isOpen) {
      this.isOpenState = isOpen
    },

    handleOpenDrawerClick() {
      this.isOpenState = true
    },
  },
})

const DrawerStateful = Template.bind({})

DrawerStateful.argTypes = {
  isOpen: { table: { disable: true } },
  onIsOpenChange: { table: { disable: true } },
}

export default DrawerStateful