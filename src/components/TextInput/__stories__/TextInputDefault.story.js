import TextInput from '../index'

export default () => ({
  components: { TextInput },
  template: `
    <div class="p-6">
      <TextInput placeholder="Email address" type="email" />
    </div>
  `,
})
