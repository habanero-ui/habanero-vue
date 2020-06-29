import Button from '../index'

export default () => ({
  components: { Button },
  template: `
    <div class="flex justify-start p-6">
      <div><Button iconName="bell" /></div>
    </div>
  `,
})