import MoneyInput from '../index'

const Template = (args, { argTypes }) => ({
  components: { MoneyInput },
  props: Object.keys(argTypes),
  data: () => ({
    centsState: '',
  }),
  template: `
    <MoneyInput
      v-bind="$props"
      :cents="centsState"
      :onCentsChange="handleCentsChange"
    />
  `,
  methods: {
    handleCentsChange(cents) {
      this.centsState = cents
    },
  },
})

const MoneyInputStateful = Template.bind({})

MoneyInputStateful.argTypes = {
  onCentsChange: { table: { disable: true } },
  cents: { table: { disable: true } },
}

export default MoneyInputStateful
