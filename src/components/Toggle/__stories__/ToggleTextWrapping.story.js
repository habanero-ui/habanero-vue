import Toggle from '../index'

export default () => ({
  components: { Toggle },
  template: `
    <div class="flex flex-col items-start max-w-xs p-6">
      <Toggle
        :isChecked="true"
        text="The quick brown fox jumps over the lazy dog"
      />
    </div>
  `,
})
