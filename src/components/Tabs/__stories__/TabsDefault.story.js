import { action } from '@storybook/addon-actions'
import Tab from '../../Tab/index'
import Tabs from '../index'

export default () => ({
  components: { Tab, Tabs },
  template: `
    <div class="p-6">
      <Tabs selectedName="about" @selectedNameChange="handleSelectedNameChange">
        <Tab name="home" text="Home" />
        <Tab name="about" text="About" />
        <Tab disabled name="contact" text="Contact" />
        <Tab name="pricing" text="Pricing" />
      </Tabs>
    </div>
  `,
  methods: {
    handleSelectedNameChange: action('selectedNameChange'),
  },
})
