import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  template: `
    <div class="p-6">
      <Icon class="mb-4" name="badge" />
      <Icon class="mb-4" color="error" name="badge" />
      <Icon class="mb-4" color="info" name="badge" />
      <Icon class="mb-4" color="subtle" name="badge" />
      <Icon class="mb-4" color="success" name="badge" />
      <Icon class="mb-4" color="warning" name="badge" />
      <Icon class="text-purple mb-4" name="badge" />
    </div>
  `,
})
