import SingleSelect from '../index'

export default (args, { argTypes }) => ({
  components: { SingleSelect },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-lg">
      <SingleSelect v-bind="$props" />
    </div>
  `,
})
