import Button from '../../Button/index'
import Stack from '../index'

export default () => ({
  components: { Button, Stack },
  template: `
    <Stack space="6">
      <Button v-if="false" text="Hidden Button" />
      <Button text="Button 1" />
    </Stack>
  `,
})
