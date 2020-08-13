import { action } from '@storybook/addon-actions'

import Checkbox from '../index'

const Template = (args, { argTypes }) => ({
  components: { Checkbox },
  props: Object.keys(argTypes),
  template: `
    <div class="flex flex-col items-start p-6">
      <Checkbox v-bind="$props" />
    </div>
  `,
})

const CheckboxDefault = Template.bind({})

CheckboxDefault.args = {
  onIsCheckedChange: action('onIsCheckedChange'),
}

export default CheckboxDefault
