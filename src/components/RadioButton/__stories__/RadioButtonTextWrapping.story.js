import RadioButton from '../index'

export default () => ({
  components: { RadioButton },
  template: `
    <div class="flex flex-col items-start max-w-xs p-6">
      <RadioButton
        :isChecked="true"
        text="The quick brown fox jumps over the lazy dog"
        value="value"
      />
    </div>
  `,
})
