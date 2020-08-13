import { action } from '@storybook/addon-actions'

import Checkbox from '../index'

const Template = (args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  template: `<Checkbox v-bind="$props" />`,
})

const CheckboxDefault = Template.bind({})

CheckboxDefault.args = {
  onIsCheckedChange: action('onIsCheckedChange'),
}

export default CheckboxDefault
