import RadioButton from '../../RadioButton/index'
import RadioGroup from '../index'

export default () => ({
  components: { RadioButton, RadioGroup },
  data: () => ({
    value: 'a',
  }),
  template: `
    <div class="flex flex-col items-start p-6">
      <RadioGroup
        :onValueChange="handleValueChange"
        :value="value"
      >
        <RadioButton text="Alpha" value="a" />
        <RadioButton text="Bravo" value="b" />
        <RadioButton text="Charlie" value="c" />
      </RadioGroup>
    </div>
  `,
  methods: {
    handleValueChange(value) {
      this.value = value
    },
  },
})
