import Button from '../index'

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
    <div class="flex justify-start p-6">
      <div v-if="wrapWithDiv">
        <Button v-bind="$props" />
      </div>
      <Button v-else v-bind="$props" />
    </div>
  `,
})

export default Template.bind({})
