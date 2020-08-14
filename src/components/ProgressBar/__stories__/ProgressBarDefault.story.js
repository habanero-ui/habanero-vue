import ProgressBar from '../index'

export default ((args, { argTypes }) => ({
  components: { ProgressBar },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-lg">
      <ProgressBar v-bind="$props" />
    </div>
  `,
})).bind({})
