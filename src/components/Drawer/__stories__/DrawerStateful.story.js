import Button from '../../Button/index'
import Drawer from '../index'

export default (args, { argTypes }) => ({
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
