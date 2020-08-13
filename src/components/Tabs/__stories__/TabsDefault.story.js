import { action } from '@storybook/addon-actions'

import Tab from '../../Tab/index'
import Tabs from '../index'

export default () => ({
  components: { Tab, Tabs },
  template: `
    <Tabs selectedName="About" :onSelectedNameChange="onSelectedNameChange">
      <Tab name="Home" />
      <Tab name="About" />
      <Tab disabled name="Contact" />
      <Tab name="Pricing" />
    </Tabs>
  `,
  methods: {
    onSelectedNameChange: action('onSelectedNameChange'),
  },
})
