import RadioButton from '../../RadioButton/index'
import RadioGroup from '../index'

export default ((args, { argTypes }) => ({
  components: { RadioButton, RadioGroup },
  props: Object.keys(argTypes),
  template: `
    <RadioGroup v-bind="$props">
      <RadioButton text="Alpha" value="a" />
      <RadioButton text="Bravo" value="b" />
      <RadioButton text="Charlie" value="c" />
    </RadioGroup>
  `,
})).bind({})
