import Tab from '../../Tab/index'
import Tabs from '../index'

export default () => ({
  components: { Tab, Tabs },
  data: () => ({
    selectedName: 'home',
  }),
  template: `
    <div class="p-6">
      <Tabs :selectedName="selectedName" @selectedNameChange="handleSelectedNameChange">
        <Tab name="home" text="Home" />
        <Tab name="about" text="About" />
        <Tab name="contact" text="Contact" />
        <Tab name="pricing" text="Pricing" />
      </Tabs>
    </div>
  `,
  methods: {
    handleSelectedNameChange(name) {
      this.selectedName = name
    },
  },
})
