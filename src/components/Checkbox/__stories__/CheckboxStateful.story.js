import Checkbox from '../index'

const Template = (args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  data: () => ({
    isCheckedState: false,
  }),
  template: `
    <div class="flex flex-col items-start p-6">
      <Checkbox
        v-bind="$props"
        :isChecked="isCheckedState"
        :onIsCheckedChange="handleIsCheckedChange"
      />
    </div>
  `,
  methods: {
    handleIsCheckedChange(isChecked) {
      this.isCheckedState = isChecked
    },
  },
})

export default Template.bind({})
