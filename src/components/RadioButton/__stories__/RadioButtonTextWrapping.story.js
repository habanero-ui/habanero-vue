import RadioButton from '../index'

export default () => ({
  components: { RadioButton },
  template: `
    <div class="max-w-xs">
      <RadioButton
        :isChecked="true"
        text="The quick brown fox jumps over the lazy dog"
        value="value"
      />
    </div>
  `,
})
