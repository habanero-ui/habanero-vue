import TextArea from '../index'

export default ((args, { argTypes }) => ({
  components: { TextArea },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-lg">
      <TextArea v-bind="$props" />
    </div>
  `,
})).bind({})
