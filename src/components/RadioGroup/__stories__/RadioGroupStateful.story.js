import RadioButton from '../../RadioButton/index'
import RadioGroup from '../index'

export default ((args, { argTypes }) => ({
  components: { RadioButton, RadioGroup },
  props: Object.keys(argTypes),
  data: () => ({
    valueState: 'a',
  }),
  template: `
    <RadioGroup v-bind="$props" :onValueChange="handleValueChange" :value="valueState" >
      <RadioButton text="Alpha" value="a" />
      <RadioButton text="Bravo" value="b" />
      <RadioButton text="Charlie" value="c" />
    </RadioGroup>
  `,
  methods: {
    handleValueChange(value) {
      this.valueState = value
    },
  },
})).bind({})
