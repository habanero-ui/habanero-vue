import Badge from '../index'

export default ((args, { argTypes }) => ({
  components: { Badge },
  props: Object.keys(argTypes),
  template: `<div class="flex"><Badge v-bind="$props" /></div>`,
})).bind({})
