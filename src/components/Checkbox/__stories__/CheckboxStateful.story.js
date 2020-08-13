import Checkbox from '../index'

const Template = (args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  data: () => ({
    isCheckedState: false,
  }),
  template: `
    <Checkbox
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

export default Template.bind({})
