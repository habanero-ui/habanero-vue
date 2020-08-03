import Button from '../../Button/index'
import Drawer from '../index'

export default () => ({
  components: { Button, Drawer },
  data: () => ({
    isOpen: false,
  }),
  template: `
    <div class="absolute flex flex-col items-start inset-0 p-6">
      <div>
        <Button
          text="Open Drawer"
          @click.native="handleOpenDrawerClick"
        />
      </div>
      <Drawer
        :isOpen="isOpen"
        :onIsOpenChange="handleIsOpenChange">
        <div>Some Content</div>
      </Drawer>
    </div>
  `,
  methods: {
    handleIsOpenChange(isOpen) {
      this.isOpen = isOpen
    },

    handleOpenDrawerClick() {
      this.isOpen = true
    },
  },
})
