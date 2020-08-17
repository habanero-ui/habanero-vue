import Tab from '../../Tab/index'
import Tabs from '../index'

const Template = (args, { argTypes }) => ({
  components: { Tab, Tabs },
  props: Object.keys(argTypes),
  template: `
    <Tabs v-bind="$props">
      <Tab name="Home" />
      <Tab name="About" />
      <Tab disabled name="Contact" />
      <Tab name="Pricing" />
    </Tabs>
  `,
})

const TabsDefault = Template.bind({})

TabsDefault.argTypes = {
  selectedName: {
    control: {
      type: 'inline-radio',
      options: ['Home', 'About', 'Contact', 'Pricing'],
    },
  },
}

TabsDefault.args = {
  selectedName: 'About',
}

export default TabsDefault
