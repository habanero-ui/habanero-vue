import Tag from '../index'

export default ((args, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes),
  template: `
    <Tag v-bind="$props" :onDelete="isDeleteVisible ? onDelete : undefined"  />
  `,
})).bind({})
