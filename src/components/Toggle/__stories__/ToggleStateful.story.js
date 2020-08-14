import Toggle from '../index'

export default ((args, { argTypes }) => ({
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
})).bind({})
