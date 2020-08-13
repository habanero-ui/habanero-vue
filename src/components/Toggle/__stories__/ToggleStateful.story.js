import Toggle from '../index'

export default () => ({
  components: { Toggle },
  data: () => ({
    isChecked: false,
  }),
  template: `
    <Toggle
      :isChecked="isChecked"
      :onIsCheckedChange="handleIsCheckedChange"
      text="Flip the switch"
    />
  `,
  methods: {
    handleIsCheckedChange(isChecked) {
      this.isChecked = isChecked
    },
  },
})
