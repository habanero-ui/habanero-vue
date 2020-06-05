import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  template: `
    <div class="flex items-center p-6">
      <Icon class="mr-4" name="badge" />
      <Icon class="mr-4" color="error" name="badge" />
      <Icon class="mr-4" color="info" name="badge" />
      <Icon class="mr-4" color="subtle" name="badge" />
      <Icon class="mr-4" color="success" name="badge" />
      <Icon class="mr-4" color="warning" name="badge" />
      <Icon class="text-purple mr-4" name="badge" />
    </div>
  `,
})
