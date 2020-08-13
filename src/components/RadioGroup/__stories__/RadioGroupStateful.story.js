import RadioButton from '../../RadioButton/index'
import RadioGroup from '../index'

export default () => ({
  components: { RadioButton, RadioGroup },
  data: () => ({
    value: 'a',
  }),
  template: `
    <RadioGroup
      :onValueChange="handleValueChange"
      :value="value"
    >
      <RadioButton text="Alpha" value="a" />
      <RadioButton text="Bravo" value="b" />
      <RadioButton text="Charlie" value="c" />
    </RadioGroup>
  `,
  methods: {
    handleValueChange(value) {
      this.value = value
    },
  },
})
