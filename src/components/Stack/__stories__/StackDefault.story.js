import Button from '../../Button/index'
import TextInput from '../../TextInput/index'
import Stack from '../index'

export default ((args, { argTypes }) => ({
  components: { Button, Stack, TextInput },
  props: Object.keys(argTypes),
  template: `
    <Stack v-bind="$props">
      <Button text="Button 1" />
      <div class="bg-purple">Colored DIV!</div>
      <Button text="Button 2" />
      <span>Normal SPAN.</span>
      <TextInput value="TextInput" />
    </Stack>
  `,
})).bind({})
