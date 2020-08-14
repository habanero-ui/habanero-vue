import Divider from '../index'

export default ((args, { argTypes }) => ({
  components: { Divider },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-lg"> 
      <Divider v-bind="$props" />
    </div>
  `,
})).bind({})
