import Stack from '../../Stack/index'
import Button from '../index'

export default () => ({
  components: { Button, Stack },
  template: `
    <div class="flex justify-start p-6">
      <Stack space="4">
        <Button size="small" text="Text" />
        <Button text="Text" />
      </Stack>
    </div>
  `,
})
