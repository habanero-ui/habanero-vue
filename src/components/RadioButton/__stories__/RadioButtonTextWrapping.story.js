import RadioButton from '../index'

const Template = (args, { argTypes }) => ({
  components: { RadioButton },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-xs">
      <RadioButton v-bind="$props" />
    </div>
  `,
})

const RadioButtonTextWrapping = Template.bind({})

RadioButtonTextWrapping.args = {
  text: 'The quick brown fox jumps over the lazy dog',
}

export default RadioButtonTextWrapping
