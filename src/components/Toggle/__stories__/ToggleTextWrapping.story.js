import Toggle from '../index'

export default () => ({
  components: { Toggle },
  template: `
    <div class="max-w-xs">
      <Toggle
        :isChecked="true"
        text="The quick brown fox jumps over the lazy dog"
      />
    </div>
  `,
})
