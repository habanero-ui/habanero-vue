import Expander from '../index'

export default ((args, { argTypes }) => ({
  components: { Expander },
  props: Object.keys(argTypes),
  template: `
    <div class="w-screen max-w-lg border-2 border-border">
      <Expander v-bind="$props">
        Some Content
      </Expander>
    </div>
  `,
})).bind({})
