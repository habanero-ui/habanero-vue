import Stack from '../../Stack/index'
import Button from '../index'

export default () => ({
  components: { Button, Stack },
  template: `
    <div class="flex justify-start p-6">
      <Stack align="start" space="4">
        <Button iconName="bell" iconSide="left" text="Text" />
        <Button iconName="bell" text="Text" />
      </Stack>
    </div>
  `,
})
