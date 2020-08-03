import Toggle from '../index'

export default () => ({
  components: { Toggle },
  data: () => ({
    isChecked: false,
  }),
  template: `
    <div class="flex flex-col items-start p-6">
      <Toggle
        :isChecked="isChecked"
        :onIsCheckedChange="handleIsCheckedChange"
        text="Flip the switch"
      />
    </div>
  `,
  methods: {
    handleIsCheckedChange(isChecked) {
      this.isChecked = isChecked
    },
  },
})
