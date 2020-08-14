import Select from '../index'

export default ((args, { argTypes }) => ({
  components: { Select },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-lg">
      <Select v-bind="$props">
        <option :value="1">Alpha</option>
        <option :value="2">Bravo</option>
        <option :value="3">Charlie</option>
        <option :value="4">Delta</option>
        <option :value="5">Echo</option>
      </Select>
    </div>
  `,
})).bind({})
