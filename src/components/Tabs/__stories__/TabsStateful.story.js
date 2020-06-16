import Tab from '../../Tab/index'
import Tabs from '../index'

export default () => ({
  components: { Tab, Tabs },
  data: () => ({
    selectedName: 'Home',
  }),
  template: `
    <div class="p-6">
      <Tabs :selectedName="selectedName" :onSelectedNameChange="handleSelectedNameChange">
        <Tab name="Home" />
        <Tab name="About" />
        <Tab name="Contact" />
        <Tab name="Pricing" />
      </Tabs>
    </div>
  `,
  methods: {
    handleSelectedNameChange(name) {
      this.selectedName = name
    },
  },
})
