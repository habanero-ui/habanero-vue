import ListItem from '../index'

export default ((args, { argTypes }) => ({
  components: { ListItem },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-lg">
      <ListItem v-bind="$props" />
    </div>
  `,
})).bind({})
