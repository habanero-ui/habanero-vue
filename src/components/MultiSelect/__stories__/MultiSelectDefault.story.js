import MultiSelect from '../index'

export default (args, { argTypes }) => ({
  components: { MultiSelect },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-lg">
      <MultiSelect v-bind="$props" />
    </div>
  `,
})
