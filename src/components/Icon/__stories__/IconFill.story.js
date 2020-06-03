import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  template: `
    <div class="flex items-center p-6">
      <Icon class="text-error-100 mr-4" name="badge" />
      <Icon class="mr-4" name="badge" />
      <Icon class="text-info mr-4" name="badge" />
      <Icon class="text-success mr-4" name="badge" />
      <Icon class="text-warning mr-4" name="badge" />
    </div>
  `,
})
