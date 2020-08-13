import Button from '../../Button/index'
import Slideover from '../index'

export default () => ({
  components: { Button, Slideover },
  data: () => ({
    isOpen: false,
  }),
  template: `
    <div class="absolute flex flex-col items-start inset-0">
      <div>
        <Button
          text="Open Slideover"
          @click.native="handleOpenSlideoverClick"
        />
      </div>
      <Slideover
        :isOpen="isOpen"
        :onIsOpenChange="handleIsOpenChange">
        <div>Some Content</div>
      </Slideover>
    </div>
  `,
  methods: {
    handleIsOpenChange(isOpen) {
      this.isOpen = isOpen
    },

    handleOpenSlideoverClick() {
      this.isOpen = true
    },
  },
})
