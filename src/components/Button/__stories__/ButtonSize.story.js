import Button from '../index'

export default () => ({
  components: { Button },
  template: `
    <div class="p-6">
      <Button class="mb-4" size="small" text="Text" />
      <Button text="Text" />
    </div>
  `,
})
