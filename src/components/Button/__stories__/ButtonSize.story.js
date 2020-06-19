import Stack from '../../Stack/index'
import Button from '../index'

export default () => ({
  components: { Button, Stack },
  template: `
    <Stack align="start" class="p-6" space="6">
      <Button size="small" text="Text" />
      <Button text="Text" />
    </Stack>
  `,
})
