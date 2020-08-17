import TextArea from '../index'

const Template = (args, { argTypes }) => ({
  components: { TextArea },
  props: Object.keys(argTypes),
  data: () => ({
    valueState: '',
  }),
  template: `
    <div class="w-screen max-w-lg">
      <TextArea
        v-bind="$props"
        :onValueChange="handleValueChange"
        :value="valueState"
      />
    </div>
  `,
  methods: {
    handleValueChange(value) {
      this.valueState = value
    },
  },
})

const TextAreaStateful = Template.bind({})

TextAreaStateful.argTypes = {
  onValueChange: { table: { disable: true } },
  value: { table: { disable: true } },
}

export default TextAreaStateful
