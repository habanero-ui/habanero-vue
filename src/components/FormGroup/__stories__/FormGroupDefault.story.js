import Checkbox from '../../Checkbox/index'
import FormGroup from '../index'

export default ((args, { argTypes }) => ({
  components: { Checkbox, FormGroup },
  props: Object.keys(argTypes),
  template: `
    <FormGroup v-bind="$props">
      <Checkbox text="Alpha" />
    </FormGroup>
  `,
})).bind({})
