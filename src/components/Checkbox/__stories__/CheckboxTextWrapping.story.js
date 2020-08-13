import Checkbox from '../index'

const Template = (args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  template: `
    <div class="max-w-xs">
      <Checkbox v-bind="$props" />
    </div>
  `,
})

const CheckboxTextWrapping = Template.bind({})

CheckboxTextWrapping.args = {
  text: 'The quick brown fox jumps over the lazy dog',
}

export default CheckboxTextWrapping
