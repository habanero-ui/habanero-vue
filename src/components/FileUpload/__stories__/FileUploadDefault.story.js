import FileUpload from '../index'

export default ((args, { argTypes }) => ({
  components: { FileUpload },
  props: Object.keys(argTypes),
  template: `<FileUpload v-bind="$props" />`,
})).bind({})
