import Button from '../../Button/index'
import Slideover from '../index'

const Template = (args, { argTypes }) => ({
  components: { Button, Slideover },
  props: Object.keys(argTypes),
  data: () => ({
    isOpenState: false,
  }),
  template: `
    <div class="absolute flex flex-col items-start inset-0 p-6">
      <div>
        <Button text="Open Slideover" @click.native="handleOpenSlideoverClick" />
      </div>
      <Slideover v-bind="$props" :isOpen="isOpenState" :onIsOpenChange="handleIsOpenChange">
        <div>Some Content</div>
      </Slideover>
    </div>
  `,
  methods: {
    handleIsOpenChange(isOpen) {
      this.isOpenState = isOpen
    },

    handleOpenSlideoverClick() {
      this.isOpenState = true
    },
  },
})

const SlideoverStateful = Template.bind({})

SlideoverStateful.argTypes = {
  isOpen: { table: { disable: true } },
  onIsOpenChange: { table: { disable: true } },
}

export default SlideoverStateful
