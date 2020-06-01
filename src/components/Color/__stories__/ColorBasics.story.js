import Color from '../index'
import Typography from '../../Typography/index'

export default () => ({
  components: { Color, Typography },
  template: `
    <div class="p-6">
      <Typography class="mb-4" variant="h5">Surface Colors</Typography>
      <Color hex="FFFFFF" name="white" />
      <Color hex="3E3B3E" name="black" />
      <Color hex="F2F4F6" name="grey-200" />
    </div>
  `,
})
