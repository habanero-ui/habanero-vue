import Button from '../index'

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
    <div class="flex">
      <div v-if="wrapWithDiv">
        <Button v-bind="$props" />
      </div>
      <Button v-else v-bind="$props" />
    </div>
  `,
})

const ButtonDefault = Template.bind({})

ButtonDefault.argTypes = {
  wrapWithDiv: {
    name: 'Wrap With <div>',
    description:
      'Wraps the Button in a div so that it does not take up the full parent width.',
  },
}
ButtonDefault.args = {
  wrapWithDiv: true,
}

export default ButtonDefault
