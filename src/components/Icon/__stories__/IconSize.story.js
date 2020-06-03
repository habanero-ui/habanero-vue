import Icon from '../index'

export default () => ({
  components: {
    Icon,
  },
  template: `
    <div class="flex items-center p-6">
      <Icon class="mr-4" name="badge" size="small" />
      <Icon class="mr-4" name="badge" />
      <Icon class="mr-4" name="badge" size="large" />
    </div>
  `,
})
