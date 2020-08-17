import TextInput from '../index'

const Template = (args, { argTypes }) => ({
  components: { TextInput },
  props: Object.keys(argTypes),
  data: () => ({
    valueState: '',
  }),
  template: `
    <TextInput
      v-bind="$props"
      :onValueChange="handleValueChange"
      :value="valueState"
    />
  `,
  methods: {
    handleValueChange(value) {
      this.valueState = value
    },
  },
})

const TextInputStateful = Template.bind({})

TextInputStateful.argTypes = {
  onValueChange: { table: { disable: true } },
  value: { table: { disable: true } },
}

export default TextInputStateful
