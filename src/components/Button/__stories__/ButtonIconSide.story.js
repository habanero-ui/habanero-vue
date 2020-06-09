import Button from '../index'

export default () => ({
  components: { Button },
  template: `
    <div class="p-6">
      <Button class="mb-4" iconName="bell" iconSide="left" text="Text" />
      <Button iconName="bell" text="Text" />
    </div>
  `,
})
