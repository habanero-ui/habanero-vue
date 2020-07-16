import Stack from '../../Stack/index'
import Button from '../index'

export default () => ({
  components: { Button, Stack },
  template: `
    <div class="flex justify-start p-6">
      <Stack space="4">
        <Button iconName="bell" iconSize="small" text="Text" />
        <Button iconName="bell" iconSize="medium" text="Text" />
      </Stack>
    </div>
  `,
})
