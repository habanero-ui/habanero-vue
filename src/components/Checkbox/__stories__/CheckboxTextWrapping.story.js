import Checkbox from '../index'

const Template = (args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  template: `
    <div class="flex flex-col items-start max-w-xs p-6">
      <Checkbox v-bind="$props" />
    </div>
  `,
})

export default Template.bind({})
