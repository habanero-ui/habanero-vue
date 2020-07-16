import Button from '../index'

export default () => ({
  components: { Button },
  template: `
    <div class="flex justify-start p-6">
      <div>
        <Button
          iconName="minus"
          iconSize="medium"
          size="medium"
          variant="text"
        />
      </div>
    </div>
  `,
})
