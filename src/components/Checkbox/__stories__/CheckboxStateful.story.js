import Checkbox from '../index'

export default () => ({
  components: { Checkbox },
  data: () => ({
    isChecked: false,
  }),
  template: `
    <div class="flex flex-col items-start p-6">
      <Checkbox
        :isChecked="isChecked"
        :onIsCheckedChange="handleIsCheckedChange"
        text="Check me out"
      />
    </div>
  `,
  methods: {
    handleIsCheckedChange(isChecked) {
      this.isChecked = isChecked
    },
  },
})
