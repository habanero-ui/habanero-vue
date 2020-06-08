import Button from '../index'

export default () => ({
  components: { Button },
  template: `
    <div class="p-6">
      <Button
        color="subtle"
        iconName="sort"
        iconSize="small"
        text="Sorting"
        variant="text"
      />
    </div>
  `,
})
