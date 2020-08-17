import Modal from '../index'

export default ((args, { argTypes }) => ({
  components: { Modal },
  props: Object.keys(argTypes),
  template: `
    <div class="absolute inset-0">
      <Modal v-bind="$props">
        <div class="px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </div>
      </Modal>
    </div>
  `,
})).bind({})
