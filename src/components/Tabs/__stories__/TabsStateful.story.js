import Tab from '../../Tab/index'
import Tabs from '../index'

export default () => ({
  components: { Tab, Tabs },
  data: () => ({
    selectedName: 'Home',
  }),
  template: `
    <Tabs :selectedName="selectedName" :onSelectedNameChange="handleSelectedNameChange">
      <Tab name="Home" />
      <Tab name="About" />
      <Tab name="Contact" />
      <Tab name="Pricing" />
    </Tabs>
  `,
  methods: {
    handleSelectedNameChange(name) {
      this.selectedName = name
    },
  },
})
