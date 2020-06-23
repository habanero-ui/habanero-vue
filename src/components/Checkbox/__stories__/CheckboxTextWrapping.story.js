import Checkbox from '../index'

export default () => ({
  components: { Checkbox },
  template: `
    <div class="flex flex-col items-start max-w-xs p-6">
      <Checkbox
        :isChecked="true"
        text="The quick brown fox jumps over the lazy dog"
      />
    </div>
  `,
})
