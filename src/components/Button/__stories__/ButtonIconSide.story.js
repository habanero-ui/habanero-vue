import Stack from '../../Stack/index'
import Button from '../index'

export default () => ({
  components: { Button, Stack },
  template: `
    <Stack align="start" class="p-6" space="6">
      <Button iconName="bell" iconSide="left" text="Text" />
      <Button iconName="bell" text="Text" />
    </Stack>
  `,
})
