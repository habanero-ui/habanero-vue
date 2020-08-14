import Tab from '../../Tab/index'
import Tabs from '../index'

const Template = ((args, { argTypes }) => ({
  components: { Tab, Tabs },
  props: Object.keys(argTypes),
  data: () => ({
    selectedNameState: 'Home',
  }),
  template: `
    <Tabs v-bind="$props" :selectedName="selectedNameState" :onSelectedNameChange="handleSelectedNameChange">
      <Tab name="Home" />
      <Tab name="About" />
      <Tab name="Contact" />
      <Tab name="Pricing" />
    </Tabs>
  `,
  methods: {
    handleSelectedNameChange(name) {
      this.selectedNameState = name
    },
  },
})).bind({})

const TabsStateful = Template.bind({})

TabsStateful.argTypes = {
  selectedName: { table: { disable: true } },
}

export default TabsStateful
