import Button from '../../Button/index'
import EmptyState from '../index'

export default ((args, { argTypes }) => ({
  components: { Button, EmptyState },
  props: Object.keys(argTypes),
  template: `
    <EmptyState v-bind="$props">
      <div><Button text="Perform Some Action" /></div>
    </EmptyState>
  `,
})).bind({})
