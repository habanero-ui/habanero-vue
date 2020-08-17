import Toggle from '../index'

const Template = (args, { argTypes }) => ({
  components: { Toggle },
  props: Object.keys(argTypes),
  data: () => ({
    isCheckedState: false,
  }),
  template: `
    <Toggle
      v-bind="$props"
      :isChecked="isCheckedState"
      :onIsCheckedChange="handleIsCheckedChange"
    />
  `,
  methods: {
    handleIsCheckedChange(isChecked) {
      this.isCheckedState = isChecked
    },
  },
})

const ToggleStateful = Template.bind({})

ToggleStateful.argTypes = {
  isChecked: { table: { disable: true } },
  onIsCheckedChange: { table: { disable: true } },
}

export default ToggleStateful
